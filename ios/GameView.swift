import SwiftUI
import SceneKit

struct GameViewContainer: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> GameViewController {
        return GameViewController()
    }

    func updateUIViewController(_ uiViewController: GameViewController, context: Context) {}
}

class GameViewController: UIViewController {
    var scnView: SCNView!
    var gameLogic: GameLogic!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        scnView = SCNView(frame: self.view.frame)
        scnView.backgroundColor = .black
        scnView.antialiasingMode = .multisampling4X
        self.view.addSubview(scnView)
        
        gameLogic = GameLogic(view: scnView)
        gameLogic.setupScene()
        
        let tap = UITapGestureRecognizer(target: self, action: #selector(handleTap))
        scnView.addGestureRecognizer(tap)
    }

    @objc func handleTap() {
        gameLogic.placeBlock()
    }
}
