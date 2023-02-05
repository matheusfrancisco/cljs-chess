(ns main.db)

(def state
  (atom
   {[8 0] {:value \u265C :type :black-rook}
    [8 1] {:value \u265E :type :black-knight}
    [8 2] {:value \u265D :type :black-bishop}
    [8 3] {:value \u265B :type :black-queen}
    [8 4] {:value \u265A :type :black-king}
    [8 5] {:value \u265D :type :black-bishop}
    [8 6] {:value \u265E :type :black-knight}
    [8 7] {:value \u265C :type :black-rook}
    [7 0] {:value \u265F :type :black-pawn}
    [7 1] {:value \u265F :type :black-pawn}
    [7 2] {:value \u265F :type :black-pawn}
    [7 3] {:value \u265F :type :black-pawn}
    [7 4] {:value \u265F :type :black-pawn}
    [7 5] {:value \u265F :type :black-pawn}
    [7 6] {:value \u265F :type :black-pawn}
    [7 7] {:value \u265F :type :black-pawn}
;;white
    [2 0] {:value \u2659 :type :white-rook}
    [2 1] {:value \u2659 :type :white-knight}
    [2 2] {:value \u2659 :type :white-bishop}
    [2 3] {:value \u2659 :type :white-queen}
    [2 4] {:value \u2659 :type :white-king}
    [2 5] {:value \u2659 :type :white-bishop}
    [2 6] {:value \u2659 :type :white-knight}
    [2 7] {:value \u2659 :type :white-rook}
    [1 0] {:value \u2656 :type :white-pawn}
    [1 1] {:value \u2658 :type :white-pawn}
    [1 2] {:value \u2657 :type :white-pawn}
    [1 3] {:value \u2655 :type :white-pawn}
    [1 4] {:value \u2654 :type :white-pawn}
    [1 5] {:value \u2657 :type :white-pawn}
    [1 6] {:value \u2658 :type :white-pawn}
    [1 7] {:value \u2656 :type :white-pawn}}))
