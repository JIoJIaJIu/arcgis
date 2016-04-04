//>>built
define("esri/WKIDUnitConversion",["dojo/has","./kernel"],function(c,d){var a,b={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.116756,5E4,15E4],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,
2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:13,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,
3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,
3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,
4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,
5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6210:0,6211:0,6316:0,6391:1,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25E3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,
27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53034:0,53048:0,53049:0,54034:0,65061:2,
65062:2,65161:0,65163:0,102041:2,102064:11,102068:14,102069:15,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,
103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,
103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,
103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,
103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103695:2};for(a=2E3;2046>a;a++)b[a]=0;for(a=2056;2066>a;a++)b[a]=0;for(a=2067;2136>a;a++)b[a]=0;for(a=2137;2155>a;a++)b[a]=0;for(a=2161;2171>a;a++)b[a]=0;for(a=2172;2194>a;a++)b[a]=0;for(a=2195;2199>a;a++)b[a]=0;for(a=2200;2204>a;a++)b[a]=0;for(a=2205;2218>a;a++)b[a]=0;for(a=2222;2225>a;a++)b[a]=1;for(a=2225;2251>a;a++)b[a]=2;for(a=2251;2254>a;a++)b[a]=1;for(a=2257;2265>a;a++)b[a]=
2;for(a=2274;2280>a;a++)b[a]=2;for(a=2280;2283>a;a++)b[a]=1;for(a=2283;2290>a;a++)b[a]=2;for(a=2290;2293>a;a++)b[a]=0;for(a=2308;2314>a;a++)b[a]=0;for(a=2315;2463>a;a++)b[a]=0;for(a=2523;2867>a;a++)b[a]=0;for(a=2867;2870>a;a++)b[a]=1;for(a=2870;2889>a;a++)b[a]=2;for(a=2891;2896>a;a++)b[a]=2;for(a=2896;2899>a;a++)b[a]=1;for(a=2902;2909>a;a++)b[a]=2;for(a=2915;2921>a;a++)b[a]=2;for(a=2921;2924>a;a++)b[a]=1;for(a=2924;2931>a;a++)b[a]=2;for(a=2931;2963>a;a++)b[a]=0;for(a=2964;2969>a;a++)b[a]=2;for(a=
2969;2974>a;a++)b[a]=0;for(a=2975;2992>a;a++)b[a]=0;for(a=2995;3052>a;a++)b[a]=0;for(a=3054;3080>a;a++)b[a]=0;for(a=3081;3089>a;a++)b[a]=0;for(a=3092;3102>a;a++)b[a]=0;for(a=3106;3139>a;a++)b[a]=0;for(a=3146;3152>a;a++)b[a]=0;for(a=3153;3167>a;a++)b[a]=0;for(a=3168;3173>a;a++)b[a]=0;for(a=3174;3204>a;a++)b[a]=0;for(a=3294;3359>a;a++)b[a]=0;for(a=3367;3404>a;a++)b[a]=0;for(a=3408;3417>a;a++)b[a]=0;for(a=3417;3439>a;a++)b[a]=2;for(a=3441;3447>a;a++)b[a]=2;for(a=3447;3451>a;a++)b[a]=0;for(a=3451;3460>
a;a++)b[a]=2;for(a=3460;3479>a;a++)b[a]=0;for(a=3554;3560>a;a++)b[a]=0;for(a=3560;3571>a;a++)b[a]=2;for(a=3571;3582>a;a++)b[a]=0;for(a=3594;3598>a;a++)b[a]=0;for(a=3601;3605>a;a++)b[a]=0;for(a=3637;3640>a;a++)b[a]=0;for(a=3665;3668>a;a++)b[a]=0;for(a=3693;3696>a;a++)b[a]=0;for(a=3701;3728>a;a++)b[a]=0;for(a=3728;3740>a;a++)b[a]=2;for(a=3740;3752>a;a++)b[a]=0;for(a=3753;3761>a;a++)b[a]=2;for(a=3761;3774>a;a++)b[a]=0;for(a=3775;3778>a;a++)b[a]=0;for(a=3779;3782>a;a++)b[a]=0;for(a=3783;3786>a;a++)b[a]=
0;for(a=3788;3792>a;a++)b[a]=0;for(a=3797;3803>a;a++)b[a]=0;for(a=3814;3817>a;a++)b[a]=0;for(a=3825;3830>a;a++)b[a]=0;for(a=3832;3842>a;a++)b[a]=0;for(a=3844;3853>a;a++)b[a]=0;for(a=3873;3886>a;a++)b[a]=0;for(a=3890;3894>a;a++)b[a]=0;for(a=3907;3913>a;a++)b[a]=0;for(a=3942;3951>a;a++)b[a]=0;for(a=3968;3971>a;a++)b[a]=0;for(a=3973;3977>a;a++)b[a]=0;for(a=3986;3990>a;a++)b[a]=0;for(a=3994;3998>a;a++)b[a]=0;for(a=4048;4052>a;a++)b[a]=0;for(a=4056;4064>a;a++)b[a]=0;for(a=4093;4097>a;a++)b[a]=0;for(a=
4399;4414>a;a++)b[a]=2;for(a=4418;4434>a;a++)b[a]=2;for(a=4455;4458>a;a++)b[a]=2;for(a=4484;4490>a;a++)b[a]=0;for(a=4491;4555>a;a++)b[a]=0;for(a=4568;4590>a;a++)b[a]=0;for(a=4652;4657>a;a++)b[a]=0;for(a=4766;4801>a;a++)b[a]=0;for(a=5014;5017>a;a++)b[a]=0;for(a=5069;5073>a;a++)b[a]=0;for(a=5105;5131>a;a++)b[a]=0;for(a=5173;5189>a;a++)b[a]=0;for(a=5253;5260>a;a++)b[a]=0;for(a=5269;5276>a;a++)b[a]=0;for(a=5292;5312>a;a++)b[a]=0;for(a=5329;5332>a;a++)b[a]=0;for(a=5343;5350>a;a++)b[a]=0;for(a=5355;5358>
a;a++)b[a]=0;for(a=5387;5390>a;a++)b[a]=0;for(a=5459;5464>a;a++)b[a]=0;for(a=5479;5483>a;a++)b[a]=0;for(a=5518;5521>a;a++)b[a]=0;for(a=5530;5540>a;a++)b[a]=0;for(a=5550;5553>a;a++)b[a]=0;for(a=5562;5584>a;a++)b[a]=0;for(a=5623;5626>a;a++)b[a]=2;for(a=5631;5640>a;a++)b[a]=0;for(a=5649;5654>a;a++)b[a]=0;for(a=5663;5681>a;a++)b[a]=0;for(a=5682;5686>a;a++)b[a]=0;for(a=5875;5878>a;a++)b[a]=0;for(a=5921;5941>a;a++)b[a]=0;for(a=6050;6126>a;a++)b[a]=0;for(a=6244;6276>a;a++)b[a]=0;for(a=6328;6349>a;a++)b[a]=
0;for(a=6350;6355>a;a++)b[a]=0;for(a=20002;20033>a;a++)b[a]=0;for(a=20062;20093>a;a++)b[a]=0;for(a=20135;20139>a;a++)b[a]=0;for(a=20248;20259>a;a++)b[a]=0;for(a=20348;20359>a;a++)b[a]=0;for(a=20436;20441>a;a++)b[a]=0;for(a=20822;20825>a;a++)b[a]=0;for(a=20934;20937>a;a++)b[a]=0;for(a=21035;21038>a;a++)b[a]=0;for(a=21095;21098>a;a++)b[a]=0;for(a=21148;21151>a;a++)b[a]=0;for(a=21413;21424>a;a++)b[a]=0;for(a=21473;21484>a;a++)b[a]=0;for(a=21780;21783>a;a++)b[a]=0;for(a=21891;21895>a;a++)b[a]=0;for(a=
21896;21900>a;a++)b[a]=0;for(a=22171;22178>a;a++)b[a]=0;for(a=22181;22188>a;a++)b[a]=0;for(a=22191;22198>a;a++)b[a]=0;for(a=22234;22237>a;a++)b[a]=0;for(a=22521;22526>a;a++)b[a]=0;for(a=22991;22995>a;a++)b[a]=0;for(a=23028;23039>a;a++)b[a]=0;for(a=23830;23854>a;a++)b[a]=0;for(a=23866;23873>a;a++)b[a]=0;for(a=23877;23885>a;a++)b[a]=0;for(a=23886;23895>a;a++)b[a]=0;for(a=23946;23949>a;a++)b[a]=0;for(a=24311;24314>a;a++)b[a]=0;for(a=24342;24348>a;a++)b[a]=0;for(a=24370;24375>a;a++)b[a]=10;for(a=24375;24382>
a;a++)b[a]=0;for(a=24718;24722>a;a++)b[a]=0;for(a=24817;24822>a;a++)b[a]=0;for(a=24877;24883>a;a++)b[a]=0;for(a=24891;24894>a;a++)b[a]=0;for(a=25391;25396>a;a++)b[a]=0;for(a=25828;25839>a;a++)b[a]=0;for(a=26191;26196>a;a++)b[a]=0;for(a=26391;26394>a;a++)b[a]=0;for(a=26701;26723>a;a++)b[a]=0;for(a=26729;26800>a;a++)b[a]=2;for(a=26801;26804>a;a++)b[a]=2;for(a=26811;26814>a;a++)b[a]=2;for(a=26847;26871>a;a++)b[a]=2;for(a=26891;26900>a;a++)b[a]=0;for(a=26901;26924>a;a++)b[a]=0;for(a=26929;26947>a;a++)b[a]=
0;for(a=26948;26999>a;a++)b[a]=0;for(a=27037;27041>a;a++)b[a]=0;for(a=27205;27233>a;a++)b[a]=0;for(a=27258;27261>a;a++)b[a]=0;for(a=27391;27399>a;a++)b[a]=0;for(a=27561;27565>a;a++)b[a]=0;for(a=27571;27575>a;a++)b[a]=0;for(a=27581;27585>a;a++)b[a]=0;for(a=27591;27595>a;a++)b[a]=0;for(a=28191;28194>a;a++)b[a]=0;for(a=28348;28359>a;a++)b[a]=0;for(a=28402;28433>a;a++)b[a]=0;for(a=28462;28493>a;a++)b[a]=0;for(a=29118;29123>a;a++)b[a]=0;for(a=29168;29173>a;a++)b[a]=0;for(a=29177;29186>a;a++)b[a]=0;for(a=
29187;29196>a;a++)b[a]=0;for(a=29900;29904>a;a++)b[a]=0;for(a=30161;30180>a;a++)b[a]=0;for(a=30491;30495>a;a++)b[a]=0;for(a=30729;30733>a;a++)b[a]=0;for(a=31251;31260>a;a++)b[a]=0;for(a=31265;31269>a;a++)b[a]=0;for(a=31275;31280>a;a++)b[a]=0;for(a=31281;31298>a;a++)b[a]=0;for(a=31461;31470>a;a++)b[a]=0;for(a=31491;31496>a;a++)b[a]=0;for(a=31917;31923>a;a++)b[a]=0;for(a=31965;32001>a;a++)b[a]=0;for(a=32001;32004>a;a++)b[a]=2;for(a=32005;32032>a;a++)b[a]=2;for(a=32033;32061>a;a++)b[a]=2;for(a=32064;32068>
a;a++)b[a]=2;for(a=32074;32078>a;a++)b[a]=2;for(a=32081;32087>a;a++)b[a]=0;for(a=32107;32131>a;a++)b[a]=0;for(a=32133;32159>a;a++)b[a]=0;for(a=32164;32168>a;a++)b[a]=2;for(a=32180;32200>a;a++)b[a]=0;for(a=32201;32261>a;a++)b[a]=0;for(a=32301;32361>a;a++)b[a]=0;for(a=32601;32663>a;a++)b[a]=0;for(a=32664;32668>a;a++)b[a]=2;for(a=32701;32762>a;a++)b[a]=0;for(a=53001;53005>a;a++)b[a]=0;for(a=53008;53020>a;a++)b[a]=0;for(a=53021;53033>a;a++)b[a]=0;for(a=53042;53047>a;a++)b[a]=0;for(a=54001;54005>a;a++)b[a]=
0;for(a=54008;54020>a;a++)b[a]=0;for(a=54021;54033>a;a++)b[a]=0;for(a=54042;54047>a;a++)b[a]=0;for(a=54048;54054>a;a++)b[a]=0;for(a=102001;102041>a;a++)b[a]=0;for(a=102042;102064>a;a++)b[a]=0;for(a=102065;102068>a;a++)b[a]=0;for(a=102070;102118>a;a++)b[a]=0;for(a=102122;102217>a;a++)b[a]=0;for(a=102221;102378>a;a++)b[a]=0;for(a=102382;102389>a;a++)b[a]=0;for(a=102389;102399>a;a++)b[a]=2;for(a=102401;102445>a;a++)b[a]=0;for(a=102445;102448>a;a++)b[a]=2;for(a=102450;102453>a;a++)b[a]=0;for(a=102461;102469>
a;a++)b[a]=2;for(a=102469;102497>a;a++)b[a]=0;for(a=102500;102520>a;a++)b[a]=1;for(a=102520;102525>a;a++)b[a]=0;for(a=102525;102530>a;a++)b[a]=2;for(a=102530;102550>a;a++)b[a]=0;for(a=102570;102589>a;a++)b[a]=0;for(a=102590;102599>a;a++)b[a]=0;for(a=102601;102604>a;a++)b[a]=0;for(a=102605;102629>a;a++)b[a]=0;for(a=102629;102647>a;a++)b[a]=2;for(a=102648;102701>a;a++)b[a]=2;for(a=102701;102704>a;a++)b[a]=0;for(a=102707;102731>a;a++)b[a]=2;for(a=102733;102759>a;a++)b[a]=2;for(a=102767;102799>a;a++)b[a]=
0;for(a=102962;102970>a;a++)b[a]=0;for(a=102971;102974>a;a++)b[a]=0;for(a=102975;102990>a;a++)b[a]=0;for(a=102990;102993>a;a++)b[a]=1;for(a=102997;103003>a;a++)b[a]=0;for(a=103003;103009>a;a++)b[a]=2;for(a=103009;103012>a;a++)b[a]=0;for(a=103012;103015>a;a++)b[a]=2;for(a=103019;103022>a;a++)b[a]=0;for(a=103022;103025>a;a++)b[a]=2;for(a=103029;103032>a;a++)b[a]=0;for(a=103032;103035>a;a++)b[a]=2;for(a=103065;103069>a;a++)b[a]=0;for(a=103074;103077>a;a++)b[a]=0;for(a=103077;103080>a;a++)b[a]=1;for(a=
103080;103083>a;a++)b[a]=0;for(a=103083;103086>a;a++)b[a]=2;for(a=103090;103094>a;a++)b[a]=0;for(a=103097;103100>a;a++)b[a]=0;for(a=103100;103103>a;a++)b[a]=2;for(a=103107;103110>a;a++)b[a]=0;for(a=103110;103113>a;a++)b[a]=2;for(a=103113;103117>a;a++)b[a]=0;for(a=103117;103121>a;a++)b[a]=2;for(a=103153;103158>a;a++)b[a]=0;for(a=103158;103163>a;a++)b[a]=2;for(a=103163;103166>a;a++)b[a]=0;for(a=103166;103169>a;a++)b[a]=1;for(a=103169;103172>a;a++)b[a]=2;for(a=103186;103189>a;a++)b[a]=0;for(a=103189;103192>
a;a++)b[a]=2;for(a=103192;103196>a;a++)b[a]=0;for(a=103196;103200>a;a++)b[a]=2;for(a=103200;103225>a;a++)b[a]=0;for(a=103225;103228>a;a++)b[a]=1;for(a=103232;103238>a;a++)b[a]=0;for(a=103238;103244>a;a++)b[a]=2;for(a=103244;103247>a;a++)b[a]=0;for(a=103247;103250>a;a++)b[a]=2;for(a=103254;103257>a;a++)b[a]=0;for(a=103257;103260>a;a++)b[a]=2;for(a=103264;103267>a;a++)b[a]=0;for(a=103267;103270>a;a++)b[a]=2;for(a=103300;103376>a;a++)b[a]=0;for(a=103381;103384>a;a++)b[a]=0;for(a=103384;103387>a;a++)b[a]=
1;for(a=103387;103390>a;a++)b[a]=0;for(a=103390;103393>a;a++)b[a]=2;for(a=103397;103400>a;a++)b[a]=0;for(a=103400;103472>a;a++)b[a]=2;for(a=103476;103479>a;a++)b[a]=0;for(a=103479;103482>a;a++)b[a]=2;for(a=103486;103489>a;a++)b[a]=0;for(a=103489;103492>a;a++)b[a]=2;for(a=103492;103496>a;a++)b[a]=0;for(a=103496;103500>a;a++)b[a]=2;for(a=103528;103544>a;a++)b[a]=0;for(a=103544;103549>a;a++)b[a]=2;for(a=103549;103552>a;a++)b[a]=0;for(a=103552;103555>a;a++)b[a]=1;for(a=103555;103558>a;a++)b[a]=2;for(a=
103558;103561>a;a++)b[a]=0;for(a=103571;103574>a;a++)b[a]=0;for(a=103574;103577>a;a++)b[a]=2;for(a=103577;103581>a;a++)b[a]=0;for(a=103581;103584>a;a++)b[a]=2;for(a=103600;103695>a;a++)b[a]=0;for(a=103700;103794>a;a++)b[a]=2;for(a=103794;103872>a;a++)b[a]=0;for(a=103900;103972>a;a++)b[a]=2;return c("extend-esri")&&(d.WKIDUnitConversion=b),b});