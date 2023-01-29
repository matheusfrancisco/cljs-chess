(ns main.app
  (:require
   ["react-dom/client" :as rdom]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [main.lib :refer [defnc]]))

;; app
(defnc app []
  (let [[_state _set-state] (hooks/use-state {})]
    (d/div
     (d/div
      {:className "headings"}
      (d/h1 "Cljs Chess")
      (d/h2 "Chess Game made with CLJS"))
     (d/div
      {:className "container"}

      (d/div {:className "white"} "\u265C")
      (d/div {:className "black"} "\u265E")
      (d/div {:className "white"} "\u265D")
      (d/div {:className "white"} "\u265B")
      (d/div {:className "black"} "\u265A")
      (d/div {:className "white"} "\u265D")
      (d/div {:className "black"} "\u265E")
      (d/div {:className "white"} "\u265C")

      (d/div {:className "black"} "\u265F")
      (d/div {:className "white"} "\u265F")
      (d/div {:className "black"} "\u265F")
      (d/div {:className "white"} "\u265F")
      (d/div {:className "black"} "\u265F")
      (d/div {:className "white"} "\u265F")
      (d/div {:className "black"} "\u265F")
      (d/div {:className "white"} "\u265F")

      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})

      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})

      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})

      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})

      (d/div {:className "white"} "\u2659")
      (d/div {:className "black"} "\u2659")
      (d/div {:className "white"} "\u2659")
      (d/div {:className "black"} "\u2659")
      (d/div {:className "white"} "\u2659")
      (d/div {:className "black"} "\u2659")
      (d/div {:className "white"} "\u2659")
      (d/div {:className "black"} "\u2659")

      (d/div {:className "black"} "\u2656")
      (d/div {:className "white"} "\u2658")
      (d/div {:className "black"} "\u2657")
      (d/div {:className "white"} "\u2655")
      (d/div {:className "black"} "\u2654")
      (d/div {:className "white"} "\u2657")
      (d/div {:className "black"} "\u2658")
      (d/div {:className "white"} "\u2656")))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
