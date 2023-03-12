(ns main.logic-test
  (:require
   [clojure.test :refer [deftest is]]
   [main.logic :refer [down generate-board left-diagonal-down left-diagonal-up
                       positions->id right-diagonal-down right-diagonal-up up]]))

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
  (is (= (up [6 6]) [7 6]))
  (is (= (up [5 6]) [6 6]))
  (is (= (up [4 6]) [5 6])))

(deftest left-diagonal-test
  (is (= (left-diagonal-up [6 6]) [7 5]))
  (is (= (left-diagonal-up [5 6]) [6 5])))

(deftest right-diagonal-test 
  (is (= (right-diagonal-up [6 6]) [7 7]))
  (is (= (right-diagonal-up [5 6]) [6 7])))

(deftest left-diagonal-down-test
  (is (= (left-diagonal-down [6 6]) [5 5]))
  (is (= (left-diagonal-down [5 6]) [4 5])))

(deftest right-diagonal-down-test
  (is (= (right-diagonal-down [6 6]) [5 7]))
  (is (= (right-diagonal-down [5 6]) [4 7])))

(deftest position->id-test
  (let [board (generate-board)]
    (is (= (positions->id [7 6] board)
           {"g6" true "g5" true}))))

