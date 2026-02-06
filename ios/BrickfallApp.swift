import SwiftUI

@main
struct BrickfallApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(.dark)
        }
    }
}

struct ContentView: View {
    var body: some View {
        ZStack {
            GameViewContainer()
                .edgesIgnoringSafeArea(.all)
        }
    }
}
