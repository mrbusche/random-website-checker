describe('check fitness factory 0 results', () => {
    const productIds = ['ESB250','MARRSBAR','FDMX55','SCT400G-SC42','F660','VR500','BFPR100-300','SPXMAG','SPTMAG','SP-TABLET','U100016TS','U100010TS','U1000LCD','SCB1000','SM-8GAUNTLET-LCD','GDCC200','PPR200XCEP1','PPR200XP4','9-Matrix','9-M','FLP','F600/2','F600/3','SPRINDOOR','R400G','ABS7008B','HWFITRUCK','FB300B','R200','E100016TS','E1000LCD','E100010TS','KBX36KG','KBX8KG','KBX20KG','KBX18KG','KBX16KG','BFAB20r','OPBG','OPTG','ORTG','E120010TS','E1200LCD','E120016TS','VR400','VR200','PMP150P2','PHYP200X','GDR500','TURF675','GDIB46LFF8','9F-SP285','9F-SPTC','Y120P8','Y100P1','BFPR100-PACK2','Y100P4','BFPR100P3B','OC06PR','GLP-STK','GLP-STK/3','EXM2500LPS','EXM2500BLPS','GLP2500','GLP','OBPH160WPS2','OBPH160WPS1','OST255G','ORST255G','OSB255G','ORT5G','ORT2-5G','ORT25G','ORT35G','ORT45G','ORT10G','SWT1000','ORST255','ORST300KIT','OSR300S','OSB300S','OST400S','OSB300KIT','OST400KIT','ORC','ORT','RPB','ORC2-5','ORC5','ORC10','ORC25','ORC35','ORC45','ORT35','ORT45','ORT25','ORT100','ORT2-5','ORT5','ORT10','OBPX35','OBPX15','OBPX260','YODDS455','YODDS255','YODDS300','YODDS500','OBPXC260KIT','OBPX260KIT','OSR400S','OSR500S','OSB455','OSB355','OSB500S','ORST400KIT','ORST355','ORST455','OSB400S','OSB500KIT','ORC300S','ORC400S','ORC500S','ORCT255','ORCT355','ORCT455','MB502','MA105','TS31','MB504','GMR10','GSR10','OPT25G','OPT35G','OPT45G','OPT5G','OPT2-5G','OPT10G','OST455','OST355','OSB255','OPB','OPB35','OPB2-5','OPB25','OPB45','OPB5','OPB10','OPB100','OBPZ45','OBPZ35','OBPZ25','OBPZ15','OBPZ10','OBPZ260','S2ABB/1','S2ABB/2','GCAB-STK','OPB10G','OPB45G','OPB25G','OPB2-5G','OPB35G','OPB5G','MB502RG','LVLC','GSCL360','BFINVER10r','OPT2-5','OPT5','OPT10','OPT25','OPT35','OPT45','OST255','OST300KIT','OST500S','OST300S','OPT','OBPX','OBPXC','HAHOG-R-5','HAHOG-R-10','HAHOG-R-2-5','9A-MOVE','OBPH','OBPH10','IN10CT','GDCC300','GKRT6','SDKR1000KB','GDKR50','KBLS105','KBL55','KBS','KBS780','KBS680','OB72A15','BSTRTP4','BSTRT4','OBPXC45','9A-L7','9A-MEDRACK','9A-FID46','SBB','SBBS650','SBB90','BSTSR1','BFPL10r','GRCH322','OA8','SLS500','B4RB','BSTMB16','BSTMB12','BSTFB18','BSTFB12','C2-ROWERG-20','C2-ROWERG-14','GBR10','ABS1014S','SBZ','SBZS650','SBZ50','SBZ40','SBZ30','GPA3','9M-TUFF','GWT76','RFHU68','OBPH260','SLP500G/2','PSM144XS','PSM144X','BSTNG','GSRM40','S2AC/2','S2AC/1','GCBT-STK','GCBT-STK/3','G9S','SWT14','GAB300','Y120HAMP255','Y100HAMP255','Y420','SDP70','9F-STORAGE','9F-PRESS','9F-PLYO','BSTDMB16','GPRTBR','PAB21X','Y255','GDCC210','GDR363-QSET','GDR363-SET','GDR60-SDQS550','SDQS550','BFFID10r','GYR500','NTS10','GLA400','R300-TRAK','GVKR60','BW001-1','GSCR349','RPB50','EXM1LPS','EXM1','PLA200X','RFHU46ECO-EXM','P2LPX','P2X','BSTFM10','SDX35','SDX75','SDX65','SDX5','SDX10','SDX12','SDX70','SDX60','SDX15','SDX8','BSTRROC-NAT','BSTROC-RED','OWT24','GS348Q','SDX25','BSTDB','FCD','ST-4080-4CT-ATSC-60BLK','ST-4080-4CT-10-TS-60BLK','ST-4080-4CT-10IN-60BLK','ST-4TR-110-15A-10IN-60BLK','ST-4TR-110-15A-15-ATSC-60BLK','ST-4TR-110-15A-10-TS-60BLK','RF34B-2','S351399B','S200012','S651460','S501692','GSS50','BSTPACK-2','SM3','PFT100','SBBR100','GLDA3','OTB50RH','9F-ST4CT','9F-SGH','9F-PGM200X','SDS1200','BFMG30','RFIBEX-RX2300','RX1500','RX0505','RX4400','RX2100','BFMG20r','PUB5','BSTHB10','RFMAW5312','RFMAW5311','GPRWH','ADEAfxr44','BSTSPBOX','GHYP345','S9-7420-BINTP0','KBV','KBC45','PPRWH','GDR24','TR20','GPRDH','ADEAfxr442','PFT50','SPRXT','RPB2-5','GDR48','Y041','GPR378','PLCE165X','SDP80','PSC43X','FCD-STK','MB148A','PDR282X','BSTMB20','BC2','KBS105','KB','KB70','KB50','NB59a','Y001','Y120','Y220','Y200','Y210','Y230','Y100','BFUB1r','S9-7300-QINTP0','S9-7340-WINTP0','S9-7320-WINTP0','SPTJOHNNYG','BFSB5r','XEBEX','SPTXG400','KBVS','KBVS295','KBVS275','KBXS186','PPMY5L-3100','HAHOG-R-100','GDR603T','LF-EQ-CH','LF-EQ-BLACK','LF-EQ-YELLOW','SBZ80','SBZ60','MR136','OB79EXT','BOSUELITE','TFTHS01-BK','GLRA81','GDRT6','SDP85','SDP60','SDP65','SDP75','SDP15','SDP35','SDP40','SDP25','SDP20','SDP30','SDP5','SDX50','SDR75','SDR10','GDKR100','GCEC-STK/3','GCEC-STK','WP-100','PFT-V2-160','HFT-ST','HFTP-150','XFT-150','WP-50','PROW','SP-SENSORPRO','T100016TS','T10009LCD','T100010TS','T80016TS','T80010TS','T8009LCD','T40016TS','T40010TS','T4009LCD','SWT-R','SWT-B','OB60B','91270','9---FP','9S2BTP2-A','9M-SPTCS800','KP295SET','JL','JLX','JL2','SDR50','OBPX25','SLM300G/2','GST20','OBPX10','SBBS200','SBB50','SBB60','SBB80','SBB40','GPR378P4','SPR1000BACKP4','SPR500BACKP4','BFPR100P3','BFPR100P4','GDR80','GDR44','GDCCBAR','BSTFWH','KBL20','KBL25','KBL35','KBL30','KBX14KG','KB65','LMMG','OMG86','GDIB46L','BSTRTDA','AAB2','NB59','BB23','BSTOLP','HAHOG-R-35','HAHOG-R-45','HAHOG-R-25','HAHOG-R-255','HADBU-5-50','LMCG','LMPP','BSTSB75','BSTSB45','SDR90','SDR55','GIOT9','GIOT','SDR35','SPTXT485','KBX22KG','KBX4KG','KBC40','KBC35','KB5','KB80','KB55','KB60','KB100','BSTPBS5','BSTPBS1','BSTPB18','BSTPB6','S351625D','EXMLP1','BSTFB24','BSTPB42','BSTPB36','BSTPB30','BSTPB24','GDIP59','SCB26','VDRA30','GPM65','GLM83','GCAB360','ST-4RB-15-ATSC','ST-4RB-10-TS','ACH18','ST-4UB-LCD','ST-4RB-10-LCD','PPPULSE-red','SM-8G-10','SM-8G-2019-15-ATSC','GDR60-URETH','SDR','SDR60','SDR30','OB72B','MB503RG','MB501RG','9FS61-FP','FSTYLE-STEP','GSTCK','OB86EXT','NAGLUTEDRIVE','SPRJAM','PFI150','PVLP156X','PCCO90X','S2LEC/1','BFE2','GCEC340','GCBT380','GLCE365','GPR370','NEO','SPR07-70295','SPR07-70297','SPR07-70298','SPRXT-H','SPRXT-L','SPRXT-M','SPRXT-UHP','SPR05-58641','TBELL','NEORACK','OB86','KBV45','OBPX45','SDKRSD8','LMSE','BSGLPX','GLPH1100','HP200','HP150','HP50','SP200','SP150','SP50','P2CLOTHSH','NEOXS','NEOM','NEOXL','NEOL','NEOS','SPTCR900ENT','SPTCU900ENT','BSTVDS110','BSTVD6','BSTVD9','BSTVD1','BSTND3','BSTYM5','BSTSMB30','BSTSMB25','BSTSMB18','BSTSMB12','BSTSMB10','BSTTT20','BSTTT15','BSTRT5','BSTRT1','BSTMB10','BSTHB30','BSTHB25','BSTFR36F','BSTFB9','BSTDMB-3PACK','BSTDMB6','BSTDMB20','BSTDMB10','BSTCH44','BSTCB','BSTB-5PACK','BSTB1','BSTB5','BSTB3','BSTB2','BSTB4','BSTART4','BSTART3','SPTXE395','SPTXE295','SPTXE195','SPTCIC850','SPTCT800ENT','SPTCE900ENT','SPTCT900ENT','BSTJR1','SPTXT485ENT','SPTCRW900','LVIP','LVLP','ABCPS500','WT46','GFID71','SPRWPH','SPRUL','SPRBP','SPRCUA','SPRMB','SPRSTEP','SPRSF','DR378','FCDWA','FCD-STK/3','SVKR1000','SMR1000','SPR1000DB','SPR1000DBBACK','SPR500P2','SDIB370','GWT56','GWS100','GPU348','GPRUL','GMFP-STK','GKR9','GIOT-STK/3','GIOT-STK','GFI21','GDR34','GAB100','GAB60','SPRMGC','GCAB-STK/3','GPCB329','GLA378','PPRBP','PPRJC','PPRTB','PPRUL','PPRMCU','PLA144X','PAB139X','PPB32X','PVKC83X','PMP150','BFRB1r','BFCT1r','BFVK10r','BFHYP10r','DR100','SPTST800FID','SPTXT385','SPTXT285','SPTXT185','SPTXT685','SPTXBU55','SPTXBR25','SPTXBR55','SPTXBR95','SPTXS895','SPTCR800ENT','SPTCR800','SPTCU800','SPTCU900','SPTCR900','SPTAB900','SPTCIC800','SPTCE900','SPTCE800ENT','SPTCT800','SPTCRW800H20','SPTCRW800','SPTCS800','SPTCRS800S','SOIB250','SDKRMB','SDKRSD6','E300','E400','KBC5','BSTVD4','BFOB10r','BFLA100','BFFT10r','BFAB10r','BFMC10','BFPR100r','LVSP','LVLE','SDR20','SDP55','SDP10','OB20','BSTVD5','OCRB89','HB140B-XXL','9S2CC','STBR500','PP71-MOV-3100','OBPXC25','OBPXC10','HAHTPH1','OAS14','MB229A','BSTHRB','SODB250','SOSB250','STIBRXT2','KBXS','SDR25','KBVS105','KBVS125','KBVS70','KB25','E5000S','Y252','Y250','Y257','Y251','Y254','OB86RUG','HB1250B/G-MED','PPB32P2','GPR378P500','GPR370P8','GPCB329P4','GDIB46LP4','SDPS550','SPTXRW600','PPPULSE-Black','BSTDYN','PP71-MOV-3600','PPPEANUT','PPPMINI-PULSE','PPMY7-3150','PPVIBROLL','PPPT1-3200','BSTHB','BSTDMB','BSTMB','BSTSMB','BSTTT','SDR530SET','BSTFM20','SDR530SETB','SDX530SETB','SDX530SET','KB1070SET','KBC1070SET','KBC535SET','KB535SET','KBVS70PACK','GDKR50P4','GDR363-PKG','GDR363-SDP','GDR60-HEAVYSET','PDR282X-RFWS','TBR10P28WB','TBR10P28','LBB28','OC04','TBR50','SDS550','BSTFITBAG','BSTYM10','BSTYB10','KBXS66','BSTFB15','BSTFB4','GMFP-STK/3','GVKR82','GDR363','GFID31','PLM180X','BSTNDS110','BSTND7','BSTND9','BSTND2','GDR80SDR550','GDR80SDX550','GDR10P4','GMR5','S2SP/3','S2SP/2','S2SP','S2SLC/2','S2SLC/1','S2SLC','S2PEC/2','S2PEC/1','S2PEC','S2MP/3','S2MP/2','S2MP','S2LPC/3','S2LPC/2','S2LPC','S2LEX/2','S2LEX/1','S2LEX','S2LEC/2','S2LEC','S2LAT/2','S2LAT/1','S2LAT','S2IOT/2','S2IOT/1','S2IOT','S2FT/3','S2FT/2','S2FT/1','S2CP/3','S2CP/2','S2CP','S2CC/3','S2CC/2','S2CC/1','S2CCO/3','S2CCO/2','S2CCO/1','S2CCO','S2BTP','S2BTP/2','S2BTP/1','S2ACD/2','S2AC','BSTVD2','BSTVD10','BSTVD7','BSTVD8','PPR1000','PPR500','PPR200X','PLPX','PLA500','BSG10LPX','PPR500EXT','PLA1000','SBZ20','SBB20','SBB30','SR-SBH','SR-SC','GAP10','GAP348','GAP378','GAP378','GAP1','GAP5','GAPIOT','GAPLP','GAP9','GAP3','GAP6','SDKR1000SD','SDKR1000DB','SDKR1000MB','SDKR500SD','SDKR500DB','SDKR500MB','SDKR500KB','SDKRDBS','SDKRDBL','SDC2000G/2','SDC2000G/1','SCC1200G/2','SCC1200G/1','SLP500G/3','SLM300G/3','SLE200G/3','SLE200G/2','SLC400G/3','SLC400G/2','DPRS-S','DPRSSF','DPLS-S','DPLSSF','DPEC-S','DPECSF','DGYM-FRAME','DPCC-S','DPCCSF','DLEC-S','DIOTSF','DLATSF','DLECSF','DLAT-S','DIOT-S','SBS100','SAB500','SDKRUP2','SDKRUP','SDKRKB','SGH500','SFID425','SFID325B','SFID325','SFB125','SPRPS','SPRSA','SPRSS','SPRST','SPRTB','SPRHALFBACK','SPRHBH','SPRPLATFORM','SPRJC','SPRDIP','SPRDCB','SPRCB','SPRBT','SPRBCB','SPRBACK','SPRACB','SPR500BACK','SPR500','SPR250','SPB368G','SP300','SPR1000BACK','SPR1000','DCLP-S','DCLPSF','DGYM','DABBSF','DABB-S','DBTCSF','DBTC-S','E5000','9PRECORAMT835-C','S2FT','LP40S','LO378','GSWT','GS348QP4','GPR400','BSTVD3','BSTND4','BSTND8','HAHTPH2','BSTFB6','HB223-LRG','GPCA1','GOBH5','GMRT6','GMR10-PACK','GLDA1','FSHDP','FSHDM','FMH','B4UB','LVSR','LVLA','LVBP','GLA348QS','GINV50','GFR500-PACK','GFR500','GFID225','GFID100','GFB350','GDR60UP','GDR60','GDR500-NEOPACK','GDR24-VPACK','GDCCRACK','GDCC250','GCRPACK','GCR100','GCA2','GBPR10','WSP200','VKR30','VDRA30-PACK','T150','T25','T50','GAR250','GAR100','FID46','G1S','G3S','G5S','G6BR','G10B','EXM4000S','EXM3000LPS','BSG10X','R300','PSS60X','PPRPS','PPR1000EXT','PPA13X','PGM200X','PFID130X','PFID125X','BSTND15','BSTSH','SDR12','SDR40','C2-SKIERG-STAND','C2-SKIERG','C2-BIKEERG','KBL15','KB75','KBX10KG','MB100A','MB022A','XTERRA2500','KBX32KG','KBV20','ST-6150-8RDE-10','ST-6160-8VS-LCD','ST-6160-8VS-2019-15-ATSC','ST-6160-8VS-10','ST-6150-8RDE-LCD','ST-6150-8RDE-2019-15-ATSC','ST-6140-8CT-LCD','ST-6140-8CT-2019-15-ATSC','ST-6140-8CT-10','RFRX2500T','ST-8TR-110-10','ST-8TR-110-19-ATSC','ST-8TR-110-LCD','ST-8TH-110-LCD','ST-8TRX-110-19-ATSC','ST-8TRX-110-10','ST-8TRX-110-LCDQ','ST-10TRX-110-LCDQ','ST-10TRX-110-19-ATSC','9SPTCU800-M','SR-WPS','SR-TBR','SR-SUSP','SR-FPU','SR-BP','HB70225-MED','HB70225-LRG','HB21300','HB21700','HB140B','HB44501','HB46700','ABS7004B','SM-HIITMILL','SM-8FREECLIMBER-LCD','OBPXC35','BSTSB','BSTSB65','BSTSB55','OBPXC260','BSTND6','RPB10','JLSTAIR','FDMX80','KBL60','OBPZ','SM-8FREECLIMBER-15-ATSC','SM-8FREECLIMBER-10','SDR5','KBS275','BSTND10','SM-10G-10','SM-10G-15-ATSC','YODDP45','KBX12KG','KBV8','KBV40','KBV10','KBC50','KB20','OB86CHICAGO','S202015','S151100','SM-10G-LCD','RME9500HR','RM956iexp','RM966i','RM95RE','RME95Xi','RM95TI','RM95TE','RM9500RHRNG','RM9500HRNG','RM9500HR','RM546i','RM546HR','RMCY610a','RMCY600a','RM7000PTL','RM4600CL','SM-HIITMILLX','SM-HIITROWER','SM-HIITUBE','SM-HIITBIKE','MB438RG','BSTND1','BSTBR','BSTBR2040','BSTBR2030','BSTBR1540','BSTBR1530','BOSU','KB10','BSTND','OBPH15','HB284-MED','HB284-LRG','HB138B-MED','HB1250B/G-XXL','KBV50','KBV35','KBV25','KBV30','KBV15','KBV12','SDR3','PUB30','Y253','RFMASS22GRY','RFHU79','OB47B','OB86LPB','RFMAW','RFMAW5301','RFMAW5304','OB86B','ABSGLUTE','BSTLJO2','BSTLJHX','NAS3','RFBST4PS','RFBST4PB','RF38R','RF36T','RF34B','RFHU34','SPTCSC900','RF546','WSA2-5','ABS7008S','OBPH45','OBPH25','KBX6KG','ABS7013B','ABS1008B','ABS1008','ABS7013S','ABCBRSTSYS','ABCVCBLK','ABX3SBENCH','ABX3SPRO','ABS1014B','ABCBRST','ABSSLEDMILL','ABTF180XL','ABTF180','ABCCS1500','ABCCTLB','ABCCTL','ABCCS3000','ABCCS3000B','OB79WBB','YODDP35','BSTAW10','HB21307','SDR15','SDS210','HB140B-XL','MA330','SFB349G','SDP50','BSTND5','RPCW-SET','KBX28KG','TFSR1000','BSTAB1','KB45','KB40','KB35','KB30','KB15','SDPS900','HB140B-LRG','HAHTPH4','HAHCC','KBX24KG','KBX','XTE24FTWALLRIG','XTE44FTWALLRIG','XTE34FTWALLRIG','MB022RG','BSTHRB70','BSTHRB60','BSTHRB50','BSTHRB40','BSTHRB30','BSTHRB20','SH22','BSTDMB8','BSTDMB25','BSTDMB18','BSTDMB14','BSTDMB12','MA308V','S2CC','BSTBM','CAL500','CAL50','CAL250','CAL25','CAL20','CAL100','CAL10','CAL5','JLSTAIRGTL','BSTVDS164','OBPH35','WSA7-5','BSTWVP40','BSTBM-PACK','BSTVD','HWHVP-XXL','HWHVP-XLRG','HWHVP-SM','HWHVP-MED','HWHVP-LRG','HWHVP','BSTPACK','JLROPEFIT','CHF Glute Drive','RX2200','GC500','GC50','GC25','GC100','GCALL','GIB2','FDELAGUNA','RB47','BSTMC02RD','BSTSR10','ABCVC','SDR115','KBL40','BSTBM4','BSTBM2','SDR65','MB229','SDPS650','WSA5','BSTAW20','Y256','SDX3','SDX90','HWSBF30','HWSBF15','RPB25','RPB20','SDR95','SDS2100','SDRS2100','RX5500','RX4405','RX3200','RX2500D','RX3300','RX2500','RFOX-RX2000','SDR105','BSTMB8','BSTMB6','BSTMB4','BSTMB2','BSTMB14','TBR10','BSTFB36','RC03','KBLS','KBCS','KBLS180','KBLS390','KBLS275','KBCS105','KBCS275','KBCS680','KBC','GDR24-NPACK','SDS900','SDS650','SDX','SDS','SDPS','SDRSHEAVY','SDRS530','SDRS900','SDRS650','SPR05-58642','HB223-XL','IDA200','OB79WCB','MB507RG','BSTFB30','SBZ90','SDR70','SDKR1000P2PACK','OB86P1000SS','XTEDIPBARATTACH','KPB86','GAP2','SBZ110','SBZ100','SBZ70','SBB110','SBB100','SBB70','BSTMC02BK','BSTMB30','BSTMB25','BSTSMB20','BSTSMB16','BSTSMB14','BSTSMB8','HB24320','RB48','TBR20','WTA2','BSTND12','SDX85','SDR100','RPB1-25','RB72','BSTHB90SET','OB864STAR','BSTHB20','BSTDYN12','BSTDYN30','BSTDYN25','BSTDYN20','BSTDYN18','BSTDYN16','BSTDYN14','BSTDYN10','BSTDYN06','BSTDYN08','BSTDYN04','SDX100','MB022','RB84','SPRSC5','SPRSC4','SPRSC3','SPRSC1','SPRSC2','MB229RG','FFOFLAGT','PM25R','PM125R','HXB','RPB7-5','SDR8','FEASEL5','SDC2000G','SLM300G','SLP500G','SLE200G','SLC400G','SCC1200G','EM02','BSTWVP20','BSTBM5','KBL10','FEASEL10','FEASEL','SDX2','SDX1','SDP100','SDP95','SDP90','KBV5','KBL5','KBC75','BSTRT2','BSTOBJ','BSTBM3','BSTRT3','BSTART2','NB51','NB52','PG2','NB55','NB56','MA307N','MA307V','PUB2','BSTWPBOX','BSTFR36H','BSTSMB6','STT45','BSTBR1550','BSTHB15','BSTGTSET','BSTGT200','BSTGT150','BSTGT100','BSTOPW','BSTOBS','BSTTT10','SDR120','SDP45','BSTNDS164','SDR110','HWSBF','HWSBF8','HWSBF6','HWSBF50','HWSBF40','HWSBF4','HWSBF20','HWSBF2','SDR45','OB48','TRXPRO4','TRXCLUB4','BSTVD15','MB504RG','SDR80','MB501','SDX80','BSTVD12','SDA14T','SDA14','OB86P1000','KBL','SDP','MB148RG','OB86LPBB','RPB5','RPB12-5','SDPS2100','SDPS1200','RC02','RC0616','SPRSC','IDA149','XTESPOTTERARMPR','STIRRX317','STIRRCX127','STIRRC126','SPRAR-H','SDX95','SDX45','SDX40','SDX55','SDX30','KBL45','KBC55','TS200','SDX20','HB320100','HB29707','BSTPB','PUB34','BSTFB','BSTRINGS','IDA695','IDA595','IDA500','IDA400','IDA300','IDA249','YT810','YT800','BST3','YH900','BSHK','BSHB','BSTFRP18F','BSTFRP36F','LE9-90','L880RTM','L7RTM','L890LTDCARDIO','L890LTDSPORTS','L790LTDSPORTS','L790CLUBSPORTS','L10CLUB','BHLK700WS','BHLK500WS','BSTART','S2ABB','FDE620','L790CLUBCARDIO','BSTART5','BSTART1','LR9','LU9','L790LTDCARDIO','L10CLUBCARDIO','BHS1XIB','TRXXMOUNT3','RCF-SDB80','RCF-SDB65','RCF-SDB50','KBC65','YT800-XL','YT800-2XL','YT810-2XL','YT810-XL','YT810-MED','YT810-LRG','YT800-MED','YT800-LRG','FFOFLAGT-XL','FFOFLAGT-SM','FFOFLAGT-MED','FFOFLAGT-LRG','FFOFLAGT-2XL','FDEVX3','FDE820','FDE520','FDEJOHN','FDVIKING2AR','FDVIKING3AR','FDVIKPRO','FDNEWPORT','FDE920','FDE720','FDCAMAR','FDAPOLLO2','BSTYM3','BSTBR2050','BSTBM1','BST3R-XXL','BST3R-XL','BST3R-SM','BST3R-MED','BST3R-LG','BST3G-XXL','BST3G-XL','BST3G-SM','BST3G-MED','BST3G-LG','BST3B-XXL','BST3B-XL','BST3B-SM','BST3B-MED','BST3B-LG','PPFIT-3500','PPPRO7-3150','PPPRO5HP-3200','PPPRO5-3100','9NA-S6334','9NA-S1312','GAP','SPRXT-VL','SPR07-70294','HB1250B/G-XL','HB1250B/G-LRG','HB1250B/G-SML','HB284-XL','HB284-SML','HB223-SML','HB223-MED','SPRXRC-L','SPRXRC-M','SPRXRC-VL','SPRXRC-H','HXBREHAB','HB139W','BSTB','BSTRT','BSTGT','STIRR316','SIMONPACK','HB284','HB24310','HB24310-N','HB24330','HB24340','SPRESC','SPRAR','SPR07-702','P2METALSH','HB223','KBC70','KBC80','KBL50','SDR85','SR-LO','SH22XL/XXL','SH22M/L','LVS19','LVESAD','LTB','HB46300','HB139W-SML','HB139W-MED','HB139W-LRG','HB138B','HB24353','HB208B-MED','HB208B-LRG','HB208B-XL','HB208B-SML','HB208B','SR-HEXBASIC','HB1250B','SPRAR-VL','SPRAR-UHP','SPRAR-M','SPRAR-L','HB138B-XXL','HB138B-XL','HB138B-SML','HB138B-LRG','HB140B-SML','HB140B-MED','HB143B/G-XXL','HB143B/G-XL','HB143B/G-SML','HB143B/G-MED','HB143B/G-LRG','HXBMR','HXBLR','HXBHR','DVD1','SR-SPU','SR-BT','TRLUS','HWSBF25','HWSBF12','HWSBF10'];
    for (const product in productIds) {
        it(`check for 0 results ${productIds[product]}`, () => {
            cy.visit('https://dev.fitnessfactory.com');
            cy.get('#headerSearch').type(productIds[product]);
            cy.get('.btn.search').click();
            cy.url().then(($url) => {
                if ($url.includes('Search/index.cfm')) {
                    cy.get('h1.category').eq(0).should(($div) => {
                        const text = $div.text().replace(/\s\s+/g, ' ').trim();
                        expect(text).not.to.contain('0 Results for');
                    });
                }
            })
        })
    }
})
