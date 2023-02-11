(ns main.logic-test
  (:require
   [clojure.test :refer [deftest is]]
   [main.logic :refer [down generate-board up valid-move?]]))

(deftest generate-board-test
  (let [board (generate-board)]
    (is (= (get board [7 6])
           {:value :pawn :type :black}))

    (is (= (get board [8 7])
           {:value :rook :type :black}))

    (is (= (get board [2 0])
           {:value :pawn :type :white}))

    (is (= (get board [1 0])
           {:value :rook :type :white}))))

(deftest down-test
  (is (= (down [7 6]) [6 6]))
  (is (= (down [6 6]) [5 6]))
  (is (= (down [5 6]) [4 6])))

(deftest up-test
  (is (= (up [6 6]) [6 7]))
  (is (= (up [5 6]) [5 7]))
  (is (= (up [4 6]) [4 7])))

(deftest valid-move-test
  (let [board (generate-board)]
    (is (= (valid-move? board [7 6] [6 6]) true))))
