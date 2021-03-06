import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { configuration } from 'src/configuration';
import { isLandingPage } from 'src/utils';

/**
 * The Analytics component.
 */
const Analytics = (): ReactElement | null => {
    const amp = useAmp();
    const router = useRouter();
    const isLanding = isLandingPage(router);
	
    if (amp) return getAMPAnalytics();
    if (isLanding) return getGTAGScript();
	
    return <script dangerouslySetInnerHTML={{ __html: getAnalytics() }} />;
};

/**
 * Returns the amp analytics.
 */
const getAMPAnalytics = (): ReactElement => (
    <>
        <amp-analytics type={'googleanalytics'} data-credentials={'include'}>
            <script type={'application/json'} dangerouslySetInnerHTML={{ 
                __html: `{
					"vars" : {
						"account": "${configuration.general.google.universal}"
					},
					"triggers": {
						"trackPageview": {
							"on": "visible",
							"request": "pageview"
						}
					}
				}` 
            }} />
        </amp-analytics>
    </>
);

/**
 * Returns the analytics.
 */
const getAnalytics = (): string => {
    const universal = configuration.general.google.universal;
	
    return `
		(function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,
		h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)},
		l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r)
		r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")},
		n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect",
		A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview",
		sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer||
		void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language?
		(f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0,
		sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&&
		a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0,
		ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&&
		!1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest;
		y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&&
		d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(),
		a.ma={track:n,trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)},
		trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}})
		(window,"${universal}",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});
	`;
};

/**
 * Returns the GTAG script.
 */
const getGTAGScript = (): ReactElement => {
    const universal = configuration.general.google.universal;
	
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${universal}`}></script>
            <script dangerouslySetInnerHTML={{ __html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${universal}');
			` }} />
        </>
    );
};

export {
    Analytics
};