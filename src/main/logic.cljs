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

(defn board-id [row col]
  (str (char (+ 96 (inc col))) row))

(defn col-index [col]
  (str (char (+ 97 col))))

(defn down [[file rank]]
  [(dec file) rank])

(defn up [[file rank]]
  [(inc file) rank])

(defn left [[file rank]]
  [file (dec rank)])

(defn right [[file rank]]
  [file (inc rank)])

(defn right-diagonal [[file rank]]
  [(inc file) (inc rank)])

(defn left-diagonal [[file rank]]
  [(inc file) (dec rank)])

(defn digits [n]
  (loop [result (list), n n]
    (if (pos? n)
      (recur (conj result (rem n 10))
             (quot n 10))
      result)))

(defn pawn-moves [[row col]]
  (if (= row 7)
    [(down [row col]) (down [(dec row) col])]
    [(down [row col])]))

(defn filter-invalid-moves [board moves]
  (filter (fn [[file rank]]
            (let [{:keys [value]} (get board [file rank])]
              (if (nil? value)
                true
                false))) moves))

(defn possible-pawn-moves [board from]
  (let [moves (pawn-moves from)]
    (filter-invalid-moves board moves)))

(defn possible-black-moves [board from value]
  (case value
    :pawn (possible-pawn-moves board from)))

(defn possible-moves [from board]
  (let [piece (get board from)
        {:keys [type value]} piece]
    (if (= type :black)
      (possible-black-moves board from value))))

(defn move! [board from to]
  (let [piece (get @board from)]
    (swap! board dissoc from)
    (swap! board assoc to piece)))

(defn valid-move?
  [board [start-file start-rank]  [end-file end-rank]]
  (let [{:keys [value type]} (get board [start-file start-rank])
        file? (= start-file end-file)
        rank? (= start-rank end-rank)]
    (when (not (nil? value))
      (case value
        :pawn (case type
                :black (prn 1)
                :white (prn 2))))))

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
  (valid-move? board [7 6] [6 6])
  (generate-board))

