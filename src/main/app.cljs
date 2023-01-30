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

      (d/div
       {:className "white"}
       (d/div {:className "number"} "8")
       (d/span "\u265C"))
      (d/div
       {:className "black"}
       (d/span "\u265E"))
      (d/div
       {:className "white"}
       (d/span "\u265D"))
      (d/div
       {:className "black"}
       (d/span "\u265B"))
      (d/div {:className "white"} (d/span "\u265A"))
      (d/div {:className "black"} (d/span "\u265D"))
      (d/div {:className "white"} (d/span "\u265E"))
      (d/div {:className "black"} (d/span "\u265C"))

      (d/div {:className "black"}
             (d/div {:className "number"} "7")
             (d/span "\u265F"))
      (d/div {:className "white"} (d/span "\u265F"))
      (d/div {:className "black"} (d/span "\u265F"))
      (d/div {:className "white"} (d/span "\u265F"))
      (d/div {:className "black"} (d/span "\u265F"))
      (d/div {:className "white"} (d/span "\u265F"))
      (d/div {:className "black"} (d/span "\u265F"))
      (d/div {:className "white"} (d/span "\u265F"))

      (d/div
       {:className "white"}
       (d/div {:className "number"} "6"))
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})

      (d/div {:className "black"}
             (d/div {:className "number"} "5"))
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})

      (d/div {:className "white"}
             (d/div {:className "number"} "4"))
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})

      (d/div
       {:className "black"}
       (d/div {:className "number"} "3"))
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})
      (d/div {:className "black"})
      (d/div {:className "white"})

      (d/div
       {:className "white"}
       (d/div {:className "number"} "2")
       (d/span "\u2659"))
      (d/div {:className "black"} (d/span "\u2659"))
      (d/div {:className "white"} (d/span "\u2659"))
      (d/div {:className "black"} (d/span "\u2659"))
      (d/div {:className "white"} (d/span "\u2659"))
      (d/div {:className "black"} (d/span "\u2659"))
      (d/div {:className "white"} (d/span "\u2659"))
      (d/div {:className "black"} (d/span "\u2659"))

      (d/div {:className "black"}
             (d/div {:className "number"} "1")
             (d/span "\u2656")
             (d/div {:className "letter"} "a")
             )
      (d/div {:className "white"} 
             (d/span "\u2658"))
      (d/div {:className "black"} (d/span "\u2657"))
      (d/div {:className "white"} (d/span "\u2655"))
      (d/div {:className "black"} (d/span "\u2654"))
      (d/div {:className "white"} (d/span "\u2657"))
      (d/div {:className "black"} (d/span "\u2658"))
      (d/div {:className "white"} (d/span "\u2656"))))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
