goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5523__auto__ = (function shadow$test$env$get_test_vars_$_iter__20221(s__20222){
return (new cljs.core.LazySeq(null,(function (){
var s__20222__$1 = s__20222;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20222__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__20228 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20228,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20228,(1),null);
var iterys__5519__auto__ = ((function (s__20222__$1,vec__20228,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__20221_$_iter__20223(s__20224){
return (new cljs.core.LazySeq(null,((function (s__20222__$1,vec__20228,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__20224__$1 = s__20224;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20224__$1);
if(temp__5804__auto____$1){
var s__20224__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20224__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20224__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20226 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20225 = (0);
while(true){
if((i__20225 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__20225);
cljs.core.chunk_append(b__20226,var$);

var G__20262 = (i__20225 + (1));
i__20225 = G__20262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20226),shadow$test$env$get_test_vars_$_iter__20221_$_iter__20223(cljs.core.chunk_rest(s__20224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20226),null);
}
} else {
var var$ = cljs.core.first(s__20224__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__20221_$_iter__20223(cljs.core.rest(s__20224__$2)));
}
} else {
return null;
}
break;
}
});})(s__20222__$1,vec__20228,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__20222__$1,vec__20228,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$test$env$get_test_vars_$_iter__20221(cljs.core.rest(s__20222__$1)));
} else {
var G__20263 = cljs.core.rest(s__20222__$1);
s__20222__$1 = G__20263;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5523__auto__ = (function shadow$test$env$get_test_count_$_iter__20249(s__20250){
return (new cljs.core.LazySeq(null,(function (){
var s__20250__$1 = s__20250;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20250__$1);
if(temp__5804__auto__){
var s__20250__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20250__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20250__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20252 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20251 = (0);
while(true){
if((i__20251 < size__5522__auto__)){
var map__20258 = cljs.core._nth(c__5521__auto__,i__20251);
var map__20258__$1 = cljs.core.__destructure_map(map__20258);
var test_ns = map__20258__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20258__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__20252,cljs.core.count(vars));

var G__20269 = (i__20251 + (1));
i__20251 = G__20269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20252),shadow$test$env$get_test_count_$_iter__20249(cljs.core.chunk_rest(s__20250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20252),null);
}
} else {
var map__20261 = cljs.core.first(s__20250__$2);
var map__20261__$1 = cljs.core.__destructure_map(map__20261);
var test_ns = map__20261__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20261__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__20249(cljs.core.rest(s__20250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
