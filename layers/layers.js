var wms_layers = [];

var lyr_TSSNativeCurrentRASTERReprojectedEPSG3857_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TSS Native - Current (RASTER - Reprojected EPSG 3857)<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_0.png" /> 0.0000<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_1.png" /> 0.0176<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_2.png" /> 0.0351<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_3.png" /> 0.0527<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_4.png" /> 0.0703<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_5.png" /> 0.0879<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_6.png" /> 0.1054<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_7.png" /> 0.1230<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_8.png" /> 0.1406<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_9.png" /> 0.1582<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_10.png" /> 0.1757<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_11.png" /> 0.1933<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_12.png" /> 0.2109<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_13.png" /> 0.2285<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_14.png" /> 0.2460<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_15.png" /> 0.2636<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_16.png" /> 0.2812<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_17.png" /> 0.2988<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_18.png" /> 0.3163<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_19.png" /> 0.3339<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_20.png" /> 0.3515<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_21.png" /> 0.3691<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_22.png" /> 0.3866<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_23.png" /> 0.4042<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_24.png" /> 0.4218<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_25.png" /> 0.4394<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_26.png" /> 0.4569<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_27.png" /> 0.4745<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_28.png" /> 0.4921<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_29.png" /> 0.5097<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_30.png" /> 0.5272<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_31.png" /> 0.5448<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_32.png" /> 0.5624<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_33.png" /> 0.5800<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_34.png" /> 0.5975<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_35.png" /> 0.6151<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_36.png" /> 0.6327<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_37.png" /> 0.6503<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_38.png" /> 0.6678<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_39.png" /> 0.6854<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_40.png" /> 0.7030<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_41.png" /> 0.7206<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_42.png" /> 0.7381<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_43.png" /> 0.7557<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_44.png" /> 0.7733<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_45.png" /> 0.7909<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_46.png" /> 0.8084<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_47.png" /> 0.8260<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_48.png" /> 0.8436<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_49.png" /> 0.8612<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_50.png" /> 0.8787<br />\
    <img src="styles/legend/TSSNativeCurrentRASTERReprojectedEPSG3857_0_51.png" /> 0.8963<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TSSNativeCurrentRASTERReprojectedEPSG3857_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342800, -20037508.342800, 20037508.342800, 20037508.342800]
        })
    });
var format_TSSNativeCurrentVECTORBINARYCLEAN_1 = new ol.format.GeoJSON();
var features_TSSNativeCurrentVECTORBINARYCLEAN_1 = format_TSSNativeCurrentVECTORBINARYCLEAN_1.readFeatures(json_TSSNativeCurrentVECTORBINARYCLEAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSSNativeCurrentVECTORBINARYCLEAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSSNativeCurrentVECTORBINARYCLEAN_1.addFeatures(features_TSSNativeCurrentVECTORBINARYCLEAN_1);
var lyr_TSSNativeCurrentVECTORBINARYCLEAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TSSNativeCurrentVECTORBINARYCLEAN_1, 
                style: style_TSSNativeCurrentVECTORBINARYCLEAN_1,
                popuplayertitle: 'TSS Native - Current (VECTOR - BINARY, CLEAN)',
                interactive: true,
                title: '<img src="styles/legend/TSSNativeCurrentVECTORBINARYCLEAN_1.png" /> TSS Native - Current (VECTOR - BINARY, CLEAN)'
            });
var format_CountryOutlineWhite_2 = new ol.format.GeoJSON();
var features_CountryOutlineWhite_2 = format_CountryOutlineWhite_2.readFeatures(json_CountryOutlineWhite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineWhite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineWhite_2.addFeatures(features_CountryOutlineWhite_2);
var lyr_CountryOutlineWhite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineWhite_2, 
                style: style_CountryOutlineWhite_2,
                popuplayertitle: 'Country Outline - White',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineWhite_2.png" /> Country Outline - White'
            });

lyr_TSSNativeCurrentRASTERReprojectedEPSG3857_0.setVisible(true);lyr_TSSNativeCurrentVECTORBINARYCLEAN_1.setVisible(true);lyr_CountryOutlineWhite_2.setVisible(true);
var layersList = [lyr_TSSNativeCurrentRASTERReprojectedEPSG3857_0,lyr_TSSNativeCurrentVECTORBINARYCLEAN_1,lyr_CountryOutlineWhite_2];
lyr_TSSNativeCurrentVECTORBINARYCLEAN_1.set('fieldAliases', {'DN': 'DN', });
lyr_CountryOutlineWhite_2.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_TSSNativeCurrentVECTORBINARYCLEAN_1.set('fieldImages', {'DN': 'Range', });
lyr_CountryOutlineWhite_2.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_TSSNativeCurrentVECTORBINARYCLEAN_1.set('fieldLabels', {'DN': 'no label', });
lyr_CountryOutlineWhite_2.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineWhite_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});