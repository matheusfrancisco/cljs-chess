(ns main.logic
  (:require
   [clojure.set :as set]))

(def icons
  {:black {:rook \u265C :knight \u265E :bishop \u265D :queen \u265B :king \u265A :pawn \u265F}
   :white {:rook \u2656  :knight \u2658  :bishop \u2657 :queen \u2655 :king \u2654 :pawn \u2659}})

(defn get-icon [type value]
  (-> icons
      type
      value))

(def initial-positions
  {[8 0] {:value :rook :type :black}
   [8 1] {:value :knight :type :black}
   [8 2] {:value :bishop :type :black}
   [8 3] {:value :queen :type :black}
   [8 4] {:value :king :type :black}
   [8 5] {:value :bishop :type :black}
   [8 6] {:value :knight :type :black}
   [8 7] {:value :rook :type :black}
   [7 0] {:value :pawn :type :black}
   [7 1] {:value :pawn :type :black}
   [7 2] {:value :pawn :type :black}
   [7 3] {:value :pawn :type :black}
   [7 4] {:value :pawn :type :black}
   [7 5] {:value :pawn :type :black}
   [7 6] {:value :pawn :type :black}
   [7 7] {:value :pawn :type :black}
;;white
   [2 0] {:value  :pawn :type :white}
   [2 1] {:value  :pawn :type :white}
   [2 2] {:value  :pawn :type :white}
   [2 3] {:value  :pawn :type :white}
   [2 4] {:value  :pawn :type :white}
   [2 5] {:value  :pawn :type :white}
   [2 6] {:value  :pawn :type :white}
   [2 7] {:value  :pawn :type :white}
   [1 0] {:value  :rook :type :white}
   [1 1] {:value  :knight :type :white}
   [1 2] {:value  :bishop :type :white}
   [1 3] {:value  :queen :type :white}
   [1 4] {:value  :king :type :white}
   [1 5] {:value  :bishop :type :white}
   [1 6] {:value  :knight :type :white}
   [1 7] {:value  :rook :type :white}})

(defn board-id [file rank]
  (str (char (+ 96 (inc rank))) file))

(defn col-index [col]
  (str (char (+ 97 col))))

;; start movements functions
(defn down [[file rank]]
  [(dec file) rank])

(defn up [[file rank]]
  [(inc file) rank])

(defn left [[file rank]]
  [file (dec rank)])

(defn right [[file rank]]
  [file (inc rank)])

(defn right-diagonal-down [position]
  (-> position
      down
      right))

(defn left-diagonal-down [position]
  (-> position
      down
      left))

(defn right-diagonal-up [[file rank]]
  (-> [file rank]
      (up)
      (right)))

(defn left-diagonal-up [[file rank]]
  (-> [file rank]
      (up)
      (left)))
;; end movements functions

(defn allow-attack? [pos board]
  (->>
   pos
   (filter
    (fn [p]
      (not (nil? (get board p)))))))

(defn pawn-moves [board [file rank]]
  (let [piece (get board [file rank])
        color (:type piece)
        fn-moves (fn []
                   (case color
                     :black
                     (if (= file 7)
                       [(down [file rank]) (down [(dec file) rank])]
                       [(down [file rank])])
                     :white
                     (if (= file 2)
                       [(up [file rank]) (up [(inc file) rank])]
                       [(up [file rank])])))
        attack (fn []
                 (case color
                   :black (->
                           [(right-diagonal-down [file rank])
                            (left-diagonal-down [file rank])]
                           (allow-attack? board)
                           vec)
                   :white (-> [(left-diagonal-up [file rank])
                               (right-diagonal-up [file rank])]
                              (allow-attack? board)
                              vec)))]
    (when (not (nil? piece))
      (concat
       (fn-moves)
       (attack)))))

(defn moves [from board]
  (let [piece (get board from)
        {:keys [type value]} piece]
    (if (not (nil? piece))
      (case value
        :pawn (pawn-moves board from))
      [])))

(defn positions->id
  [[file rank] board]
  (reduce
   (fn [moves [file rank]]
     (assoc moves (board-id file rank) true)) {}
   (moves [file rank] board)))

(defn next-move?
  [moves [file rank]]
  (let [m (get moves (board-id file rank))]
    (if m
      true
      false)))

(defn move! [board from to]
  (let [piece (get @board from)]
    (prn piece 1111)
    (swap! board assoc from nil)
    (swap! board assoc to piece)))

(defn generate-board []
  (reduce
   (fn [board [file rank]]
     (let [value (get initial-positions
                      [file rank]
                      nil)]
       (conj board
             {[file rank]  value})))
   {}
   (for [rank (range 8 0 -1)
         file (range 8)]
     [rank file])))

;; (defn steps-vertical [x c]
;;   (partition 2 (interleave (repeat x) c)))
;;
;; (defn steps-down
;;   [[x y]]
;;   (steps-vertical x (range (dec y) -1 -1)))

(comment

  (possible-moves [7 1] (generate-board))
  (let [board (generate-board)]
    (print board)
    (doseq [{:keys [id value]} board]
      (print value)
      (when (zero? (mod (inc id) 10))
        (print "\n"))))

  (def board (generate-board))
  (pawn-moves board [2 2])
  (generate-board))

