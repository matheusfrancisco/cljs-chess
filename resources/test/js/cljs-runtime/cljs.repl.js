goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17836){
var map__17837 = p__17836;
var map__17837__$1 = cljs.core.__destructure_map(map__17837);
var m = map__17837__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17837__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17856_18285 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17857_18286 = null;
var count__17858_18287 = (0);
var i__17859_18288 = (0);
while(true){
if((i__17859_18288 < count__17858_18287)){
var f_18291 = chunk__17857_18286.cljs$core$IIndexed$_nth$arity$2(null,i__17859_18288);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18291], 0));


var G__18292 = seq__17856_18285;
var G__18293 = chunk__17857_18286;
var G__18294 = count__17858_18287;
var G__18295 = (i__17859_18288 + (1));
seq__17856_18285 = G__18292;
chunk__17857_18286 = G__18293;
count__17858_18287 = G__18294;
i__17859_18288 = G__18295;
continue;
} else {
var temp__5804__auto___18296 = cljs.core.seq(seq__17856_18285);
if(temp__5804__auto___18296){
var seq__17856_18303__$1 = temp__5804__auto___18296;
if(cljs.core.chunked_seq_QMARK_(seq__17856_18303__$1)){
var c__5568__auto___18305 = cljs.core.chunk_first(seq__17856_18303__$1);
var G__18306 = cljs.core.chunk_rest(seq__17856_18303__$1);
var G__18307 = c__5568__auto___18305;
var G__18308 = cljs.core.count(c__5568__auto___18305);
var G__18309 = (0);
seq__17856_18285 = G__18306;
chunk__17857_18286 = G__18307;
count__17858_18287 = G__18308;
i__17859_18288 = G__18309;
continue;
} else {
var f_18311 = cljs.core.first(seq__17856_18303__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18311], 0));


var G__18313 = cljs.core.next(seq__17856_18303__$1);
var G__18314 = null;
var G__18315 = (0);
var G__18316 = (0);
seq__17856_18285 = G__18313;
chunk__17857_18286 = G__18314;
count__17858_18287 = G__18315;
i__17859_18288 = G__18316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18317], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18317)))?cljs.core.second(arglists_18317):arglists_18317)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17883_18329 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17884_18330 = null;
var count__17885_18331 = (0);
var i__17886_18332 = (0);
while(true){
if((i__17886_18332 < count__17885_18331)){
var vec__17915_18334 = chunk__17884_18330.cljs$core$IIndexed$_nth$arity$2(null,i__17886_18332);
var name_18335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17915_18334,(0),null);
var map__17918_18336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17915_18334,(1),null);
var map__17918_18337__$1 = cljs.core.__destructure_map(map__17918_18336);
var doc_18338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918_18337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918_18337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18335], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18339], 0));

if(cljs.core.truth_(doc_18338)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18338], 0));
} else {
}


var G__18341 = seq__17883_18329;
var G__18342 = chunk__17884_18330;
var G__18343 = count__17885_18331;
var G__18344 = (i__17886_18332 + (1));
seq__17883_18329 = G__18341;
chunk__17884_18330 = G__18342;
count__17885_18331 = G__18343;
i__17886_18332 = G__18344;
continue;
} else {
var temp__5804__auto___18345 = cljs.core.seq(seq__17883_18329);
if(temp__5804__auto___18345){
var seq__17883_18346__$1 = temp__5804__auto___18345;
if(cljs.core.chunked_seq_QMARK_(seq__17883_18346__$1)){
var c__5568__auto___18347 = cljs.core.chunk_first(seq__17883_18346__$1);
var G__18349 = cljs.core.chunk_rest(seq__17883_18346__$1);
var G__18350 = c__5568__auto___18347;
var G__18351 = cljs.core.count(c__5568__auto___18347);
var G__18352 = (0);
seq__17883_18329 = G__18349;
chunk__17884_18330 = G__18350;
count__17885_18331 = G__18351;
i__17886_18332 = G__18352;
continue;
} else {
var vec__17932_18354 = cljs.core.first(seq__17883_18346__$1);
var name_18355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932_18354,(0),null);
var map__17935_18356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932_18354,(1),null);
var map__17935_18357__$1 = cljs.core.__destructure_map(map__17935_18356);
var doc_18358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935_18357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935_18357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18355], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18359], 0));

if(cljs.core.truth_(doc_18358)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18358], 0));
} else {
}


var G__18364 = cljs.core.next(seq__17883_18346__$1);
var G__18365 = null;
var G__18366 = (0);
var G__18367 = (0);
seq__17883_18329 = G__18364;
chunk__17884_18330 = G__18365;
count__17885_18331 = G__18366;
i__17886_18332 = G__18367;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17944 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17945 = null;
var count__17946 = (0);
var i__17947 = (0);
while(true){
if((i__17947 < count__17946)){
var role = chunk__17945.cljs$core$IIndexed$_nth$arity$2(null,i__17947);
var temp__5804__auto___18379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18379__$1)){
var spec_18380 = temp__5804__auto___18379__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18380)], 0));
} else {
}


var G__18382 = seq__17944;
var G__18383 = chunk__17945;
var G__18384 = count__17946;
var G__18385 = (i__17947 + (1));
seq__17944 = G__18382;
chunk__17945 = G__18383;
count__17946 = G__18384;
i__17947 = G__18385;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17944);
if(temp__5804__auto____$1){
var seq__17944__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17944__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17944__$1);
var G__18386 = cljs.core.chunk_rest(seq__17944__$1);
var G__18387 = c__5568__auto__;
var G__18388 = cljs.core.count(c__5568__auto__);
var G__18389 = (0);
seq__17944 = G__18386;
chunk__17945 = G__18387;
count__17946 = G__18388;
i__17947 = G__18389;
continue;
} else {
var role = cljs.core.first(seq__17944__$1);
var temp__5804__auto___18390__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18390__$2)){
var spec_18391 = temp__5804__auto___18390__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18391)], 0));
} else {
}


var G__18393 = cljs.core.next(seq__17944__$1);
var G__18394 = null;
var G__18395 = (0);
var G__18396 = (0);
seq__17944 = G__18393;
chunk__17945 = G__18394;
count__17946 = G__18395;
i__17947 = G__18396;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18401 = cljs.core.ex_cause(t);
via = G__18400;
t = G__18401;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18013 = datafied_throwable;
var map__18013__$1 = cljs.core.__destructure_map(map__18013);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18013__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18014 = cljs.core.last(via);
var map__18014__$1 = cljs.core.__destructure_map(map__18014);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18014__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18014__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18014__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18015 = data;
var map__18015__$1 = cljs.core.__destructure_map(map__18015);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18015__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18015__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18015__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18016 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18016__$1 = cljs.core.__destructure_map(map__18016);
var top_data = map__18016__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18021 = phase;
var G__18021__$1 = (((G__18021 instanceof cljs.core.Keyword))?G__18021.fqn:null);
switch (G__18021__$1) {
case "read-source":
var map__18023 = data;
var map__18023__$1 = cljs.core.__destructure_map(map__18023);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18023__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18023__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18024 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18024__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18024,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18024);
var G__18024__$2 = (cljs.core.truth_((function (){var fexpr__18029 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18029.cljs$core$IFn$_invoke$arity$1 ? fexpr__18029.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18029.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18024__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18024__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18024__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18024__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18034 = top_data;
var G__18034__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18034,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18034);
var G__18034__$2 = (cljs.core.truth_((function (){var fexpr__18036 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18036.cljs$core$IFn$_invoke$arity$1 ? fexpr__18036.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18036.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18034__$1);
var G__18034__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18034__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18034__$2);
var G__18034__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18034__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18034__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18034__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18034__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18048 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(3),null);
var G__18051 = top_data;
var G__18051__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18051,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18051);
var G__18051__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18051__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18051__$1);
var G__18051__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18051__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18051__$2);
var G__18051__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18051__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18051__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18051__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18051__$4;
}

break;
case "execution":
var vec__18073 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18005_SHARP_){
var or__5045__auto__ = (p1__18005_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18078 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18078.cljs$core$IFn$_invoke$arity$1 ? fexpr__18078.cljs$core$IFn$_invoke$arity$1(p1__18005_SHARP_) : fexpr__18078.call(null,p1__18005_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18079 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18079__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18079,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18079);
var G__18079__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18079__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18079__$1);
var G__18079__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18079__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18079__$2);
var G__18079__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18079__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18079__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18079__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18079__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18021__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18133){
var map__18135 = p__18133;
var map__18135__$1 = cljs.core.__destructure_map(map__18135);
var triage_data = map__18135__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18164 = phase;
var G__18164__$1 = (((G__18164 instanceof cljs.core.Keyword))?G__18164.fqn:null);
switch (G__18164__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18165 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18166 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18167 = loc;
var G__18168 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18178_18477 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18179_18478 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18180_18479 = true;
var _STAR_print_fn_STAR__temp_val__18181_18480 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18180_18479);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18181_18480);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18106_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18106_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18179_18478);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18178_18477);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18165,G__18166,G__18167,G__18168) : format.call(null,G__18165,G__18166,G__18167,G__18168));

break;
case "macroexpansion":
var G__18203 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18204 = cause_type;
var G__18205 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18206 = loc;
var G__18207 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18203,G__18204,G__18205,G__18206,G__18207) : format.call(null,G__18203,G__18204,G__18205,G__18206,G__18207));

break;
case "compile-syntax-check":
var G__18217 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18218 = cause_type;
var G__18219 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18220 = loc;
var G__18221 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18217,G__18218,G__18219,G__18220,G__18221) : format.call(null,G__18217,G__18218,G__18219,G__18220,G__18221));

break;
case "compilation":
var G__18224 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18225 = cause_type;
var G__18226 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18227 = loc;
var G__18228 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18224,G__18225,G__18226,G__18227,G__18228) : format.call(null,G__18224,G__18225,G__18226,G__18227,G__18228));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18235 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18236 = symbol;
var G__18237 = loc;
var G__18238 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18241_18487 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18242_18488 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18243_18489 = true;
var _STAR_print_fn_STAR__temp_val__18244_18490 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18243_18489);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18244_18490);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18115_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18115_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18242_18488);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18241_18487);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18235,G__18236,G__18237,G__18238) : format.call(null,G__18235,G__18236,G__18237,G__18238));
} else {
var G__18253 = "Execution error%s at %s(%s).\n%s\n";
var G__18254 = cause_type;
var G__18255 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18256 = loc;
var G__18257 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18253,G__18254,G__18255,G__18256,G__18257) : format.call(null,G__18253,G__18254,G__18255,G__18256,G__18257));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18164__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
