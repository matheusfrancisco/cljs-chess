goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20467){
var vec__20468 = p__20467;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__20471 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__20471__$1 = (((G__20471 instanceof cljs.core.Keyword))?G__20471.fqn:null);
switch (G__20471__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__20477 = (function (){
var seq__20478 = cljs.core.seq(vars__$1);
var chunk__20479 = null;
var count__20480 = (0);
var i__20481 = (0);
while(true){
if((i__20481 < count__20480)){
var v = chunk__20479.cljs$core$IIndexed$_nth$arity$2(null,i__20481);
var temp__5804__auto___20618 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___20618)){
var t_20619 = temp__5804__auto___20618;
var G__20485_20620 = ((function (seq__20478,chunk__20479,count__20480,i__20481,t_20619,temp__5804__auto___20618,v,each_fixture_fn,G__20471,G__20471__$1,env,once_fixtures,each_fixtures,vec__20468,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_20619)));
});})(seq__20478,chunk__20479,count__20480,i__20481,t_20619,temp__5804__auto___20618,v,each_fixture_fn,G__20471,G__20471__$1,env,once_fixtures,each_fixtures,vec__20468,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__20485_20620) : each_fixture_fn.call(null,G__20485_20620));
} else {
}


var G__20623 = seq__20478;
var G__20624 = chunk__20479;
var G__20625 = count__20480;
var G__20626 = (i__20481 + (1));
seq__20478 = G__20623;
chunk__20479 = G__20624;
count__20480 = G__20625;
i__20481 = G__20626;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20478);
if(temp__5804__auto__){
var seq__20478__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20478__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20478__$1);
var G__20627 = cljs.core.chunk_rest(seq__20478__$1);
var G__20628 = c__5568__auto__;
var G__20629 = cljs.core.count(c__5568__auto__);
var G__20630 = (0);
seq__20478 = G__20627;
chunk__20479 = G__20628;
count__20480 = G__20629;
i__20481 = G__20630;
continue;
} else {
var v = cljs.core.first(seq__20478__$1);
var temp__5804__auto___20632__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___20632__$1)){
var t_20633 = temp__5804__auto___20632__$1;
var G__20490_20634 = ((function (seq__20478,chunk__20479,count__20480,i__20481,t_20633,temp__5804__auto___20632__$1,v,seq__20478__$1,temp__5804__auto__,each_fixture_fn,G__20471,G__20471__$1,env,once_fixtures,each_fixtures,vec__20468,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_20633)));
});})(seq__20478,chunk__20479,count__20480,i__20481,t_20633,temp__5804__auto___20632__$1,v,seq__20478__$1,temp__5804__auto__,each_fixture_fn,G__20471,G__20471__$1,env,once_fixtures,each_fixtures,vec__20468,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__20490_20634) : each_fixture_fn.call(null,G__20490_20634));
} else {
}


var G__20637 = cljs.core.next(seq__20478__$1);
var G__20638 = null;
var G__20639 = (0);
var G__20640 = (0);
seq__20478 = G__20637;
chunk__20479 = G__20638;
count__20480 = G__20639;
i__20481 = G__20640;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__20476 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__20476.cljs$core$IFn$_invoke$arity$1 ? fexpr__20476.cljs$core$IFn$_invoke$arity$1(G__20477) : fexpr__20476.call(null,G__20477));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20471__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__20463_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__20463_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__20498 = shadow.test.env.get_test_ns_info(ns);
var map__20498__$1 = cljs.core.__destructure_map(map__20498);
var test_ns = map__20498__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20498__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__20502,vars){
var map__20503 = p__20502;
var map__20503__$1 = cljs.core.__destructure_map(map__20503);
var env = map__20503__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20503__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__20508_20665 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__20510_20666 = null;
var count__20511_20667 = (0);
var i__20512_20668 = (0);
while(true){
if((i__20512_20668 < count__20511_20667)){
var vec__20533_20670 = chunk__20510_20666.cljs$core$IIndexed$_nth$arity$2(null,i__20512_20668);
var test_ns_20671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20533_20670,(0),null);
var ns_info_20672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20533_20670,(1),null);
var map__20536_20677 = ns_info_20672;
var map__20536_20678__$1 = cljs.core.__destructure_map(map__20536_20677);
var fixtures_20679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536_20678__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___20680 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_20679);
if(cljs.core.truth_(temp__5804__auto___20680)){
var fix_20687 = temp__5804__auto___20680;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20671,fix_20687], 0));
} else {
}

var temp__5804__auto___20688 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_20679);
if(cljs.core.truth_(temp__5804__auto___20688)){
var fix_20690 = temp__5804__auto___20688;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20671,fix_20690], 0));
} else {
}


var G__20691 = seq__20508_20665;
var G__20692 = chunk__20510_20666;
var G__20693 = count__20511_20667;
var G__20694 = (i__20512_20668 + (1));
seq__20508_20665 = G__20691;
chunk__20510_20666 = G__20692;
count__20511_20667 = G__20693;
i__20512_20668 = G__20694;
continue;
} else {
var temp__5804__auto___20697 = cljs.core.seq(seq__20508_20665);
if(temp__5804__auto___20697){
var seq__20508_20698__$1 = temp__5804__auto___20697;
if(cljs.core.chunked_seq_QMARK_(seq__20508_20698__$1)){
var c__5568__auto___20699 = cljs.core.chunk_first(seq__20508_20698__$1);
var G__20700 = cljs.core.chunk_rest(seq__20508_20698__$1);
var G__20701 = c__5568__auto___20699;
var G__20702 = cljs.core.count(c__5568__auto___20699);
var G__20703 = (0);
seq__20508_20665 = G__20700;
chunk__20510_20666 = G__20701;
count__20511_20667 = G__20702;
i__20512_20668 = G__20703;
continue;
} else {
var vec__20541_20704 = cljs.core.first(seq__20508_20698__$1);
var test_ns_20705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541_20704,(0),null);
var ns_info_20706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541_20704,(1),null);
var map__20544_20708 = ns_info_20706;
var map__20544_20709__$1 = cljs.core.__destructure_map(map__20544_20708);
var fixtures_20710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544_20709__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___20713__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_20710);
if(cljs.core.truth_(temp__5804__auto___20713__$1)){
var fix_20714 = temp__5804__auto___20713__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20705,fix_20714], 0));
} else {
}

var temp__5804__auto___20716__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_20710);
if(cljs.core.truth_(temp__5804__auto___20716__$1)){
var fix_20717 = temp__5804__auto___20716__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_20705,fix_20717], 0));
} else {
}


var G__20718 = cljs.core.next(seq__20508_20698__$1);
var G__20719 = null;
var G__20720 = (0);
var G__20721 = (0);
seq__20508_20665 = G__20718;
chunk__20510_20666 = G__20719;
count__20511_20667 = G__20720;
i__20512_20668 = G__20721;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20500_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__20500_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__20550 = cljs.test.get_current_env();
var map__20550__$1 = cljs.core.__destructure_map(map__20550);
var env = map__20550__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20550__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20550__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__20552 = arguments.length;
switch (G__20552) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__20561 = arguments.length;
switch (G__20561) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__20570 = shadow.test.env.get_test_ns_info(ns);
var map__20570__$1 = cljs.core.__destructure_map(map__20570);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20570__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__20576 = arguments.length;
switch (G__20576) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20574_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__20574_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__20600 = arguments.length;
switch (G__20600) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20591_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20591_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
