var $pluginID = "com.mob.sharesdk.SMS";eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([1-9a-zA-Z]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 A={"B":"covert_url"};6 a(8){7.S=8;7.h={"w":2,"x":2}}a.b.8=6(){f 7.S};a.b.q=6(){f"短信"};a.b.cacheDomain=6(){f"SSDK-Platform-"+$1.4.T.a};a.b.M=6(){5(7.h["x"]!=2&&7.h["x"][A.B]!=2){f 7.h["x"][A.B]}k 5(7.h["w"]!=2&&7.h["w"][A.B]!=2){f 7.h["w"][A.B]}f $1.4.M()};a.b.localAppInfo=6(E){5(U.N==0){f 7.h["w"]}k{7.h["w"]=E}};a.b.serverAppInfo=6(E){5(U.N==0){f 7.h["x"]}k{7.h["x"]=E}};a.b.saveConfig=6(){};a.b.isSupportAuth=6(){f false};a.b.authorize=6(F,settings){9 c={"l":$1.4.r.C,"m":"平台［"+7.q()+"］不支持授权功能!"};$1.native.ssdk_authStateChanged(F,$1.4.n.o,c)};a.b.cancelAuthorize=6(3){};a.b.getUserInfo=6(query,3){9 c={"l":$1.4.r.C,"m":"平台［"+7.q()+"］不支持获取用户信息功能!"};5(3!=2){3($1.4.n.o,c)}};a.b.addFriend=6(F,user,3){9 c={"l":$1.4.r.C,"m":"平台["+7.q()+"]不支持添加好友方法!"};5(3!=2){3($1.4.n.o,c)}};a.b.getFriends=6(cursor,size,3){9 c={"l":$1.4.r.C,"m":"平台["+7.q()+"]不支持获取好友列表方法!"};5(3!=2){3($1.4.n.o,c)}};a.b.share=6(F,g,3){9 p=2;9 y=2;9 d=2;9 G=2;9 e=2;9 H=2;9 i=7;9 I=g!=2?g["@I"]:2;9 J={"@I":I};9 8=$1.4.s(7.8(),g,"8");5(8==2){8=$1.4.t.V}5(8==$1.4.t.V){8=7.W(g)}5(8!=$1.4.t.X&&8!=$1.4.t.O){9 c={"l":$1.4.r.UnsupportContentType,"m":"不支持的分享类型["+8+"]"};5(3!=2){3($1.4.n.o,c,2,J)}f}$1.P.isPluginRegisted("com.1.sharesdk.connector.sms",6(j){5(j.D){p=$1.4.s(i.8(),g,"p");G=$1.4.s(i.8(),g,"G");e=$1.4.s(i.8(),g,"e");H=$1.4.s(i.8(),g,"H");5(8==$1.4.t.O){y=$1.4.s(i.8(),g,"d");5(Y.b.Z.10(y)===\'[11 12]\'){5(e==2){e=[]}d=y}}i.13([p],6(j){p=j.D[0];i.K(e,d,0,6(e){$1.P.ssdk_smsShare(8,p,G,e,H,6(j){9 L=j.L;9 z=2;switch(L){14 $1.4.n.Success:{z={};z["p"]=p;5(y!=2){z["d"]=y}15}14 $1.4.n.o:z={"l":j["l"],"m":j["m"]};15}5(3!=2){3(L,z,2,J)}})})})}k{9 c={"l":$1.4.r.APIRequestFail,"m":"平台["+i.q()+"]需要依靠16.17进行分享，请先导入16.17后再试!"};5(3!=2){3($1.4.n.o,c,2,J)}}})};a.b.callApi=6(u,method,params,3){9 c={"l":$1.4.r.C,"m":"平台［"+7.q()+"］不支持获取用户信息功能!"};5(3!=2){3($1.4.n.o,c)}};a.b.createUserByRawData=6(rawData){f 2};a.b.W=6(g){9 8=$1.4.t.X;9 d=$1.4.s(7.8(),g,"d");5(Y.b.Z.10(d)===\'[11 12]\'){8=$1.4.t.O}f 8};a.b.K=6(e,d,v,3){5(d==2){5(3!=2){3(e)}f}9 i=7;5(v<d.N){9 Q=d[v];5(Q!=2){7.18(Q,6(u){e.push(u);v++;i.K(e,d,v,3)})}k{v++;7.K(e,d,v,3)}}k{5(3!=2){3(e)}}};a.b.18=6(u,3){5(!/^(file\\:\\/)?\\//.test(u)){$1.P.downloadFile(u,6(j){5(j.D!=2){5(3!=2){3(j.D)}}k{5(3!=2){3(2)}}})}k{5(3!=2){3(u)}}};a.b.13=6(R,3){5(7.M()){$1.4.convertUrl(7.8(),2,R,3)}k{5(3){3({"D":R})}}};$1.4.registerPlatformClass($1.4.T.a,a);',[],71,'|mob|null|callback|shareSDK|if|function|this|type|var|SMS|prototype|error|images|attachments|return|parameters|_appInfo|self|data|else|error_code|error_message|responseState|Fail|text|name|errorCode|getShareParam|contentType|url|index|local|server|origImgs|resultData|SMSInfoKeys|ConvertUrl|UnsupportFeature|result|value|sessionId|title|recipients|flags|userData|_dealImages|state|convertUrlEnabled|length|Image|ext|imageUrl|contents|_type|platformType|arguments|Auto|_getShareType|Text|Object|toString|apply|object|Array|_convertUrl|case|break|ShareSDKConnector|framework|_getImagePath'.split('|'),0,{}))