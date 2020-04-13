function code1() {
  var str = `
    :l ./../Helpers -- mostly for hhsort

    data Vertex = V { name::String, degree::Int} deriving Eq
    data Edge = E { source::Vertex, target::Vertex } deriving Eq
    data Graph = G { edges::[Edge] } | BadGraph deriving (Eq, Show)
    type Degrees = [Int]

    vertices :: Graph -> [Vertex]
    vertices (G es) = let totV = [target, source] <*> es in f totV []
      where
        f [] acc = acc
        f ((V n d):vs) acc | any (\\v -> name v == n) acc = f vs acc
                           | otherwise = f vs ((V n d):acc)

    degreesToVerts :: Degrees -> [Vertex]
    degreesToVerts ds =  [V (show ss) d | (ss, d) <- zip [1..] ds]

    instance Show Vertex where
      show (V a b) = a
    instance Show Edge where
      show (E a b) = show a ++ "->" ++ show b

    instance Ord Vertex where
      (<=) (V ss n) (V tt m) = n <= m
      (>=) (V ss n) (V tt m) = n >= m
    `

  return(str)
}

function code2() {
  var str = `
    havelHakimi :: [Int] -> Bool
    havelHakimi (a:[]) = a == 0
    havelHakimi (a:as) = havelHakimi.hhsort $
      map (subtract 1) (take a as) ++ drop a as

    vertsToGraph :: [Vertex] -> Graph
    vertsToGraph verts = rebuildDegs.G $ hh verts []
      where
        havel ((V ss n):as) =
            hhsort $ snd_map (+ (-1)) (take n as) ++ drop n as
        toEdges ((V ss n):as) = [E (V ss n) vert | vert <- take n as]
        snd_map f xs = [V a (f b) | (V a b) <- xs]

        hh [] edgeAccum = edgeAccum
        hh verts edgeAccum =
          let sorted = hhsort verts in
          hh (havel sorted) (edgeAccum ++ toEdges sorted)

    rebuildDegs :: Graph -> Graph
    rebuildDegs (G es) = G $ map (buildE es) es
      where
        buildV (V n d) tars = V n $ (length.filter (== n)) tars
        buildE es (E v1 v2) =
          let totalV = [name.target, name.source] <*> es in
          E (buildV v1 totalV) (buildV v2 totalV)

    degreesToGraph :: Degrees -> Graph
    degreesToGraph degs | havelHakimi degs = 
                            vertsToGraph.degreesToVerts $ degs
                        | otherwise = BadGraph
    `
    return(str)
}

function code3() {
  var str = `
    simplex n = degreesToGraph.take (n+1) $ repeat n
    simplex 4
    G {edges = [1->2,1->3,1->4,1->5,2->3,2->4,2->5,3->4,3->5,4->5]}
  `
  return(str)
}

module.exports = {code1, code2, code3};