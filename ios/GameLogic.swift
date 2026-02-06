import SceneKit
import QuartzCore

enum GameAxis {
    case x, z
}

class GameLogic {
    var scene: SCNScene!
    var view: SCNView!
    var cameraNode: SCNNode!
    
    var stack: [SCNNode] = []
    var currentBlock: SCNNode?
    var currentAxis: GameAxis = .x
    var currentWidth: CGFloat = 5.0
    var currentDepth: CGFloat = 5.0
    var score: Int = 0
    
    let blockHeight: CGFloat = 0.5
    let moveRange: Float = 6.0
    
    init(view: SCNView) {
        self.view = view
    }
    
    func setupScene() {
        scene = SCNScene()
        view.scene = scene
        
        // Camera Setup
        cameraNode = SCNNode()
        cameraNode.camera = SCNCamera()
        cameraNode.camera?.usesOrthographicProjection = true
        cameraNode.camera?.orthographicScale = 7
        cameraNode.position = SCNVector3(x: 10, y: 10, z: 10)
        cameraNode.look(at: SCNVector3(0, 0, 0))
        scene.rootNode.addChildNode(cameraNode)
        
        // Light Setup
        let light = SCNLight()
        light.type = .directional
        light.intensity = 1000
        light.castsShadow = true
        let lightNode = SCNNode()
        lightNode.light = light
        lightNode.position = SCNVector3(5, 15, 5)
        lightNode.look(at: SCNVector3(0, 0, 0))
        scene.rootNode.addChildNode(lightNode)
        
        resetGame()
    }
    
    func resetGame() {
        stack.forEach { $0.removeFromParentNode() }
        stack = []
        score = 0
        currentWidth = 5.0
        currentDepth = 5.0
        
        // Initial Base
        let base = createBlock(w: 5, d: 5, y: 0, color: .systemIndigo)
        scene.rootNode.addChildNode(base)
        stack.append(base)
        
        spawnNext()
    }
    
    func createBlock(w: CGFloat, d: CGFloat, y: CGFloat, color: UIColor) -> SCNNode {
        let box = SCNBox(width: w, height: blockHeight, length: d, chamferRadius: 0.05)
        box.firstMaterial?.diffuse.contents = color
        box.firstMaterial?.lightingModel = .physicallyBased
        let node = SCNNode(geometry: box)
        node.position.y = Float(y)
        return node
    }
    
    func spawnNext() {
        let last = stack.last!
        let y = last.position.y + Float(blockHeight)
        
        let block = createBlock(w: currentWidth, d: currentDepth, y: CGFloat(y), color: .systemIndigo)
        currentBlock = block
        
        let startPos = (score % 2 == 0) ? -moveRange : moveRange
        if currentAxis == .x {
            block.position.x = startPos
            block.position.z = last.position.z
        } else {
            block.position.z = startPos
            block.position.x = last.position.x
        }
        
        scene.rootNode.addChildNode(block)
        
        // Animate block
        let target = -startPos
        let action = SCNAction.repeatForever(SCNAction.sequence([
            SCNAction.moveBy(x: currentAxis == .x ? CGFloat(target * 2) : 0, 
                             y: 0, 
                             z: currentAxis == .z ? CGFloat(target * 2) : 0, 
                             duration: 2.0),
            SCNAction.moveBy(x: currentAxis == .x ? CGFloat(startPos * 2) : 0, 
                             y: 0, 
                             z: currentAxis == .z ? CGFloat(startPos * 2) : 0, 
                             duration: 2.0)
        ]))
        block.runAction(action)
    }
    
    func placeBlock() {
        guard let block = currentBlock, let last = stack.last else { return }
        block.removeAllActions()
        
        let offset: CGFloat
        if currentAxis == .x {
            offset = CGFloat(block.position.x - last.position.x)
            let newWidth = currentWidth - abs(offset)
            
            if newWidth <= 0 {
                gameOver()
                return
            }
            
            // Slice logic
            currentWidth = newWidth
            block.geometry = SCNBox(width: currentWidth, height: blockHeight, length: currentDepth, chamferRadius: 0.05)
            block.position.x = last.position.x + Float(offset / 2)
            
            // Debris (simplified for concept)
            spawnDebris(x: block.position.x + (offset > 0 ? Float(currentWidth/2) : Float(-currentWidth/2)),
                        z: block.position.z, w: abs(offset), d: currentDepth)
            
        } else {
            offset = CGFloat(block.position.z - last.position.z)
            let newDepth = currentDepth - abs(offset)
            
            if newDepth <= 0 {
                gameOver()
                return
            }
            
            currentDepth = newDepth
            block.geometry = SCNBox(width: currentWidth, height: blockHeight, length: currentDepth, chamferRadius: 0.05)
            block.position.z = last.position.z + Float(offset / 2)
            
            spawnDebris(x: block.position.x,
                        z: block.position.z + (offset > 0 ? Float(currentDepth/2) : Float(-currentDepth/2)),
                        w: currentWidth, d: abs(offset))
        }
        
        stack.append(block)
        score += 1
        currentAxis = (currentAxis == .x) ? .z : .x
        
        // Move camera up
        let moveUp = SCNAction.moveBy(x: 0, y: CGFloat(blockHeight), z: 0, duration: 0.5)
        moveUp.timingMode = .easeInEaseOut
        cameraNode.runAction(moveUp)
        
        spawnNext()
    }
    
    func spawnDebris(x: Float, z: Float, w: CGFloat, d: CGFloat) {
        let debris = createBlock(w: w, d: d, y: CGFloat(stack.last!.position.y), color: .systemGray)
        debris.position = SCNVector3(x, stack.last!.position.y, z)
        debris.physicsBody = SCNPhysicsBody(type: .dynamic, shape: nil)
        scene.rootNode.addChildNode(debris)
        
        // Remove after a delay
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            debris.removeFromParentNode()
        }
    }
    
    func gameOver() {
        print("Game Over! Score: \(score)")
        resetGame()
    }
}
