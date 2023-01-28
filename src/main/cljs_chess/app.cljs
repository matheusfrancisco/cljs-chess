(ns cljs-chess.app
  (:require ["react-dom/client" :as rdom]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; app
(defnc app []
  (let [[_state _set-state] (hooks/use-state {})]
    (d/div
     (d/div
      {:className "headings"}
      (d/h1 "Cljs Chess")
      (d/h2 "Chess Game made with CLJS")))))

;; start your app with your React renderer
(defn ^:export init []
  (doto (rdom/createRoot (js/document.getElementById "app"))
    (.render ($ app))))
