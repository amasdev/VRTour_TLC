(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_D9E42DE8_C71E_AF1E_41E3_6F1F3FC3A4C3].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_D6B62C84_C6F7_AD16_41BA_0C2F2B515F55",
  "this.Container_DDDA401D_C711_B536_41AB_5317F38E02BE",
  "this.Container_DCBE79BA_C711_5772_41DD_AF5B15734173",
  "this.Container_DF54F305_C712_BB17_41BB_4B3D501DEA86",
  "this.Container_D0122D72_C712_AFF2_418D_3B7B68D86106",
  "this.Container_DE0C03F3_C711_5AF2_41E0_7E054AD2CD43",
  "this.Container_DA201A41_C76F_550E_41DB_4A680D855936",
  "this.Container_DAD042BF_D5B0_260A_41DE_03705AB8CE8A"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CF82A497_D528_075F_41CD_48B62687EDBC.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CF82A497_D528_075F_41CD_48B62687EDBC.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "daisanh"
 },
 "id": "audio_CF82A497_D528_075F_41CD_48B62687EDBC",
 "maximumAngle": 360
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0000793_D5B0_6E1A_41CE_D128D1E2D107",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3B747C0_D5B0_6E76_41E6_DD5941CD0A9D",
 "automaticZoomSpeed": 10
},
{
 "easing": "linear",
 "duration": 300,
 "id": "effect_DBF13567_C773_5F12_41CF_EBD89F387B08",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.4,
  "class": "PanoramaCameraPosition",
  "pitch": -21.63
 },
 "id": "panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -159.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C476488D_D5B0_620E_41C1_39A8B11E7B2F",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.27,
  "class": "PanoramaCameraPosition",
  "pitch": -15.12
 },
 "id": "panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C47D78A0_D5B0_6236_41BA_3FEFAA1A61AC",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "Khu l\u1eafp ch\u00edp",
 "id": "panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7",
 "vfov": 180,
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D2F795C8_CAA0_2659_41E8_7D77215268D4",
  "this.overlay_E42064C5_CE60_014A_41E7_6875FEBAC53D"
 ],
 "class": "Panorama",
 "audios": [
  "this.audio_CC413DAC_D528_0171_41E3_E54D85C320B2"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 89.06,
   "backwardYaw": 149.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C32F0817_D5B0_621A_41E9_35F89ED9BEF2",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CDB86957_D528_01DF_41E7_F0CBABB88562.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CDB86957_D528_01DF_41E7_F0CBABB88562.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "phonglaohoa"
 },
 "id": "audio_CDB86957_D528_01DF_41E7_F0CBABB88562",
 "maximumAngle": 360
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C39907DA_D5B0_6E0A_41DD_A5816AE6CAF5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3CD1806_D5B0_61FA_41D6_62CFB49A3E55",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 46.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0EFA752_D5B0_6E1A_41D3_B419651043C9",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C070B79C_D5B0_6E0E_41D3_B52F5671B93E",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C02FA781_D5B0_6EF6_41D9_8A28C0917682",
 "automaticZoomSpeed": 10
},
{
 "easing": "linear",
 "duration": 300,
 "id": "effect_DC0ED36D_C776_FB16_41E8_7C0286E699F9",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0DBF765_D5B0_6E3E_41E1_3B77938CCFA2",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CC413DAC_D528_0171_41E3_E54D85C320B2.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CC413DAC_D528_0171_41E3_E54D85C320B2.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "lapchip"
 },
 "id": "audio_CC413DAC_D528_0171_41E3_E54D85C320B2",
 "maximumAngle": 360
},
{
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Khu v\u1ef1c s\u1ea3n xu\u1ea5t - 1",
 "id": "panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_DC3DBDF2_CAA0_2649_41E8_9B80C19AEE42",
  "this.overlay_DC5F0411_CAA0_25CA_41DF_B7E729AFF793",
  "this.overlay_D226CDA0_CBA0_66CA_41E4_21C69B3AE515",
  "this.overlay_D2494098_CBA0_1EFA_41CC_0F5C03833E88",
  "this.overlay_E876ACFE_CE60_0137_41E4_E40CC484B8D3",
  "this.overlay_E9FACAA7_CEA0_01D6_41D2_E75E1A60FFAD"
 ],
 "thumbnailUrl": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_t.jpg",
 "class": "Panorama",
 "audios": [
  "this.audio_CDCA6B4B_D528_0137_4173_3073602923EA"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 3.68,
   "backwardYaw": 2.1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
   "distance": 1
  },
  {
   "yaw": 55.94,
   "backwardYaw": -2.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A",
   "distance": 1
  },
  {
   "yaw": -108.35,
   "backwardYaw": -48.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
   "distance": 1
  },
  {
   "yaw": -36.32,
   "backwardYaw": 164.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 147.66,
  "class": "PanoramaCameraPosition",
  "pitch": -18.34
 },
 "id": "panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": -12.02,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": -12.02,
  "class": "PanoramaCameraPosition",
  "pitch": -18.98
 },
 "id": "panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": -18.98
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 131.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C05287AE_D5B0_6E0A_41E9_80C11A0801B8",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "C\u00e1c danh hi\u1ec7u \u0111\u1ea1t \u0111\u01b0\u1ee3c",
 "id": "photo_E637FD7F_CE60_0335_41D4_F8A2181E9B0C",
 "width": 1600,
 "thumbnailUrl": "media/photo_E637FD7F_CE60_0335_41D4_F8A2181E9B0C_t.png",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E637FD7F_CE60_0335_41D4_F8A2181E9B0C.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C4035878_D5B0_6216_41E1_893EFA0CF186",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.6,
  "class": "PanoramaCameraPosition",
  "pitch": -39.08
 },
 "id": "panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_camera",
 "automaticZoomSpeed": 10
},
{
 "buttonPrevious": "this.IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D",
 "id": "ViewerAreaLabeled_D012FD72_C712_AFF2_41DF_E5E4B65552A3PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_D012FD72_C712_AFF2_41DF_E5E4B65552A3",
 "buttonNext": "this.IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3FB57EB_D5B0_6E0A_41D3_0CF7FF83D1CE",
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album photo_2024-07-22-16.43.13",
 "id": "album_E7E4EC7B_CE60_013E_419B_7D09659003AF",
 "thumbnailUrl": "media/album_E7E4EC7B_CE60_013E_419B_7D09659003AF_t.png",
 "playList": "this.album_E7E4EC7B_CE60_013E_419B_7D09659003AF_AlbumPlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -36.17,
   "backwardYaw": 24.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Kho l\u01b0u tr\u1eef - 4",
 "id": "panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09",
 "vfov": 180,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_D3B70E5F_CDA0_0175_41D4_909045061915"
 ],
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B",
   "camera": "this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0",
   "camera": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
   "camera": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8",
   "camera": "this.panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2",
   "camera": "this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "camera": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354",
   "camera": "this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
   "camera": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A",
   "camera": "this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49",
   "camera": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A",
   "camera": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09",
   "camera": "this.panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6",
   "camera": "this.panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7",
   "camera": "this.panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist, 13, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CC120F5C_D528_01D1_41E8_1C2277B46A6A.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CC120F5C_D528_01D1_41E8_1C2277B46A6A.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "letan"
 },
 "id": "audio_CC120F5C_D528_01D1_41E8_1C2277B46A6A",
 "maximumAngle": 360
},
{
 "easing": "linear",
 "duration": 300,
 "id": "effect_DB9C4126_C773_7712_41E7_E3FB08315F94",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -23.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0F91743_D5B0_6E7A_41E4_70FA2901758A",
 "automaticZoomSpeed": 10
},
{
 "easing": "quad_in",
 "from": "left",
 "duration": 400,
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "class": "SlideInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C04577B7_D5B0_6E1A_41CA_9A1FB824A219",
 "automaticZoomSpeed": 10
},
{
 "easing": "linear",
 "duration": 300,
 "id": "effect_DB9DDC76_C773_ADF2_41B5_AF9530CFAB64",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.09,
  "class": "PanoramaCameraPosition",
  "pitch": -19.28
 },
 "id": "panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_camera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CC450F9D_D528_0153_41E1_2A06BD8BADE9.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CC450F9D_D528_0153_41E1_2A06BD8BADE9.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "luutru"
 },
 "id": "audio_CC450F9D_D528_0153_41E1_2A06BD8BADE9",
 "maximumAngle": 360
},
{
 "items": [
  {
   "media": "this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B",
   "camera": "this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0",
   "camera": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
   "camera": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8",
   "camera": "this.panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2",
   "camera": "this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "camera": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354",
   "camera": "this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
   "camera": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A",
   "camera": "this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49",
   "camera": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A",
   "camera": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09",
   "camera": "this.panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6",
   "camera": "this.panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "easing": "quad_in",
 "duration": 400,
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "buttonZoomOut": "this.IconButton_E5264D7F_C711_6FF2_41C7_84A674825734",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonZoomIn": "this.IconButton_E733F2CF_C711_D513_41E2_6E80E955F42B",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C40C1882_D5B0_62FA_41D6_79CE31C4CFB7",
 "automaticZoomSpeed": 10
},
{
 "easing": "linear",
 "duration": 300,
 "id": "effect_DAB876B5_C773_DD77_41E0_47F941FA2B5A",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0F3E734_D5B0_6E1E_41D4_B9C441DE879D",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C01ED78A_D5B0_6E0A_41B3_4BA84AB9BE3A",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "B\u00ean trong khu v\u1ef1c s\u1ea3n xu\u1ea5t",
 "id": "photo_E7EE39F8_CE60_033B_41E2_BCA590851EC1",
 "width": 1600,
 "thumbnailUrl": "media/photo_E7EE39F8_CE60_033B_41E2_BCA590851EC1_t.png",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E7EE39F8_CE60_033B_41E2_BCA590851EC1.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "hfovMax": 130,
 "label": "Khu l\u00e3o h\u00f3a",
 "id": "panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2",
 "vfov": 180,
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DDCF8462_CAA0_264E_41E0_56546105EDFF",
  "this.overlay_EF911586_CE60_03D7_41E4_E77411D73651"
 ],
 "class": "Panorama",
 "audios": [
  "this.audio_CDB86957_D528_01DF_41E7_F0CBABB88562"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -133.74,
   "backwardYaw": -85.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -166.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3A747C9_D5B0_6E76_41E3_A3E0E5DC5FB4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 46.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0D5575C_D5B0_6E0E_41E9_B7080F98BE66",
 "automaticZoomSpeed": 10
},
{
 "easing": "quad_in",
 "from": "left",
 "duration": 400,
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "class": "SlideInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 143.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3EB67F4_D5B0_6E1E_41E3_3E86F3451CA7",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D"
  },
  {
   "yaw": 13.2,
   "backwardYaw": 94.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A",
   "distance": 1
  },
  {
   "yaw": 174.41,
   "backwardYaw": -159.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Kho l\u01b0u tr\u1eef - 2",
 "id": "panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49",
 "vfov": 180,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_D2EBCDBE_CDA0_0337_41C8_36E7D2EE6C56",
  "this.overlay_D281E95A_CDA0_037E_41E7_FD43D09CAF7E",
  "this.overlay_EF31D83C_CDA0_013B_41D8_0FE1930489E4",
  "this.overlay_EFB2C8CF_CE60_0156_41E5_CAD8E6010CDA"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.08,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C03FD778_D5B0_6E16_41E7_DE502EF67CDC",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "Ph\u00f2ng t\u1ed1i",
 "id": "panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6",
 "vfov": 180,
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D2B90CA6_CAA0_26D6_41E0_7B0ECB5F2A6D",
  "this.overlay_E450102E_CE60_00D7_41E7_FA136994FD3E"
 ],
 "class": "Panorama",
 "audios": [
  "this.audio_CF394C44_D528_0731_41E2_24E7B8B9078F"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -166.68,
   "backwardYaw": 128.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -30.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C38897E3_D5B0_6E3A_41D0_BFE08C2108D4",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Ban l\u00e3nh \u0111\u1ea1o nh\u00e0 m\u00e1y",
 "id": "photo_E639C3CC_CE60_075B_41C3_B45422C4FD13",
 "width": 1600,
 "thumbnailUrl": "media/photo_E639C3CC_CE60_075B_41C3_B45422C4FD13_t.png",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_E639C3CC_CE60_075B_41C3_B45422C4FD13.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "hfovMax": 130,
 "label": "V\u0103n ph\u00f2ng",
 "id": "panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8",
 "vfov": 180,
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D2F9053B_CAA0_263F_41E1_4FAFC8332DB4",
  "this.overlay_D690DE4A_CBA0_625E_41E5_AE4F44426969"
 ],
 "class": "Panorama",
 "audios": [
  "this.audio_CC2D112D_D528_0170_41DA_CA5D364B7825"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 156.8,
   "backwardYaw": 94.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C31E2821_D5B0_6236_41C7_EF1E48F24E65",
 "automaticZoomSpeed": 10
},
{
 "easing": "quad_in",
 "duration": 400,
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "to": "left"
},
{
 "easing": "linear",
 "duration": 300,
 "id": "effect_DBA546AB_C771_DD12_41D0_1C001E2B318B",
 "class": "FadeOutEffect"
},
{
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "To\u00e0n c\u1ea3nh",
 "id": "panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B",
 "partial": false,
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_DA373974_CA60_2E4A_41C8_0947229A1AC3",
  "this.overlay_C4B29C05_CA60_65CA_41CB_7ACACFB7C75C"
 ],
 "thumbnailUrl": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_t.jpg",
 "class": "Panorama",
 "audios": [
  "this.audio_CD41B817_D518_0F50_41DE_1E30C8B4ECA7"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -3.06,
   "backwardYaw": -97.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0",
   "distance": 1
  },
  {
   "yaw": -5.56,
   "backwardYaw": -97.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0",
   "distance": 1
  }
 ],
 "hfov": 360
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CF394C44_D528_0731_41E2_24E7B8B9078F.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CF394C44_D528_0731_41E2_24E7B8B9078F.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "phongtoi"
 },
 "id": "audio_CF394C44_D528_0731_41E2_24E7B8B9078F",
 "maximumAngle": 360
},
{
 "adjacentPanoramas": [
  {
   "yaw": 149.85,
   "backwardYaw": 89.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A"
  },
  {
   "yaw": 128.85,
   "backwardYaw": -166.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6",
   "distance": 1
  },
  {
   "yaw": 2.1,
   "backwardYaw": 3.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "distance": 1
  },
  {
   "yaw": 45.85,
   "backwardYaw": 20.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Khu v\u1ef1c s\u1ea3n xu\u1ea5t - 3",
 "id": "panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
 "vfov": 180,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_DC804295_CAA0_22CA_41B1_DAD39A95CA68",
  "this.overlay_DF31A2DB_CAA0_227E_41B7_E2B0D6A75C7A",
  "this.overlay_D2D546AF_CAA0_22D6_41D9_92218BB07B0B",
  "this.overlay_DD238E6C_CAA0_6259_41C5_8F442BD9B3F9",
  "this.overlay_ED78D7AA_CDA0_0FDF_41D1_6D1CFD532FD3",
  "this.overlay_E9D20A9B_CE60_01FE_41E5_5BED228E5593",
  "this.overlay_E9E8F82C_CE60_00DA_41E5_230563A6A959",
  "this.overlay_E8E59769_CE60_0F5D_41E5_9CC88C640221"
 ],
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "yaw": 24.99,
   "backwardYaw": -36.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09",
   "distance": 1
  },
  {
   "yaw": -159.64,
   "backwardYaw": 174.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Kho l\u01b0u tr\u1eef - 3",
 "id": "panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A",
 "vfov": 180,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_D3685C6D_CDA0_0155_41CE_358A711C6DBE",
  "this.overlay_EC1765FC_CDA0_033B_41E9_60A769AEF7C6"
 ],
 "pitch": 0
},
{
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Khu v\u1ef1c l\u1ec5 t\u00e2n",
 "id": "panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
 "partial": false,
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_DD08C850_C7CA_1B97_41C7_89D09606B471",
  "this.overlay_DD15D6B9_C7F6_1489_41CF_1D7CFBF3A17D",
  "this.overlay_DCC8EC9B_C7F6_3489_41DB_666815C6AFD2",
  "this.overlay_DC104F90_C7CE_3497_41D8_816E497B08A8",
  "this.overlay_DD28B504_C7CB_F57F_41DF_B2A7D8B828CB",
  "this.overlay_DE40CC6A_C7F6_1B8B_41C8_BB3C8954D78E",
  "this.overlay_DA348B72_CAA0_224E_41D6_19D9CAD2A3E8",
  "this.overlay_C6B338D8_D538_00D1_41E9_6D3E7F97AA8F"
 ],
 "thumbnailUrl": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_t.jpg",
 "class": "Panorama",
 "audios": [
  "this.audio_CC120F5C_D528_01D1_41E8_1C2277B46A6A"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -175.38,
   "backwardYaw": 0.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0",
   "distance": 1
  },
  {
   "yaw": 94.19,
   "backwardYaw": 156.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8",
   "distance": 1
  },
  {
   "yaw": -85.11,
   "backwardYaw": -133.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2",
   "distance": 1
  },
  {
   "yaw": -85.09,
   "backwardYaw": -133.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2",
   "distance": 1
  },
  {
   "yaw": -48.75,
   "backwardYaw": -108.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "distance": 1
  },
  {
   "yaw": -48.71,
   "backwardYaw": -108.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "distance": 1
  }
 ],
 "hfov": 360
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.75,
  "class": "PanoramaCameraPosition",
  "pitch": -16.86
 },
 "id": "panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_camera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "yaw": -4.12,
 "audio": {
  "mp3Url": "media/audio_CD41B817_D518_0F50_41DE_1E30C8B4ECA7.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CD41B817_D518_0F50_41DE_1E30C8B4ECA7.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 12.35,
 "data": {
  "label": "ttsmaker-file-2024-9-9-12-54-57"
 },
 "id": "audio_CD41B817_D518_0F50_41DE_1E30C8B4ECA7",
 "maximumAngle": 360
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "B\u00ean ngo\u00e0i nh\u00e0 m\u00e1y",
 "id": "album_E7E4EC7B_CE60_013E_419B_7D09659003AF_0",
 "width": 576,
 "thumbnailUrl": "media/album_E7E4EC7B_CE60_013E_419B_7D09659003AF_0_t.png",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_E7E4EC7B_CE60_013E_419B_7D09659003AF_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 322
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C33CB80F_D5B0_620A_41E5_709AF528234B",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3A977D1_D5B0_6E16_41CE_378B508390C5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C0CDC76E_D5B0_6E0B_41E6_E37C972DF969",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 20.53,
   "backwardYaw": 45.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49"
  },
  {
   "yaw": 164.15,
   "backwardYaw": -36.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Khu v\u1ef1c s\u1ea3n xu\u1ea5t - 2",
 "id": "panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354",
 "vfov": 180,
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_t.jpg",
 "hfov": 360,
 "overlays": [
  "this.overlay_DCE1FC69_CAA0_265A_41C7_B630C3EFD502",
  "this.overlay_DCB7D4F7_CAA0_2636_41D6_2CA5F6090AA2",
  "this.overlay_EFDFDB6B_CE60_075D_41CA_5AD8550FC0A5",
  "this.overlay_E842A27C_CE60_013A_41D5_919A6ECF7E76"
 ],
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.92,
  "class": "PanoramaCameraPosition",
  "pitch": -5.71
 },
 "id": "panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C4732897_D5B0_621A_41E5_73586DC49DA7",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Kho l\u01b0u tr\u1eef - 1",
 "id": "panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_D5300DEF_CA60_E656_41D8_2A6B8B699904",
  "this.overlay_D7085C9E_CA60_26F9_41E8_3EDAF5FD090A",
  "this.overlay_D6587E18_CA60_25FA_41C8_173B4CE1C7A1"
 ],
 "thumbnailUrl": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_t.jpg",
 "class": "Panorama",
 "audios": [
  "this.audio_CC450F9D_D528_0153_41E1_2A06BD8BADE9"
 ],
 "adjacentPanoramas": [
  {
   "yaw": -2.79,
   "backwardYaw": 55.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F",
   "distance": 1
  },
  {
   "yaw": 94.11,
   "backwardYaw": 13.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "\u0110\u1ea1i s\u1ea3nh",
 "id": "panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0",
 "partial": false,
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_D2C2FF8A_C7B6_348B_41E6_84524F160CAF",
  "this.overlay_D3FC6A54_C7B6_FF9F_41C4_348AEA5D43E2",
  "this.overlay_DA2EE2CD_CA63_E25A_41CB_7A947615BAA8",
  "this.overlay_E869375E_CEA0_0F77_41DD_C91747FE5357",
  "this.overlay_EA103475_CEA0_014A_41E7_68193C0EA1DF"
 ],
 "thumbnailUrl": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_t.jpg",
 "class": "Panorama",
 "audios": [
  "this.audio_CF82A497_D528_075F_41CD_48B62687EDBC"
 ],
 "adjacentPanoramas": [
  {
   "yaw": 0.98,
   "backwardYaw": -175.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5",
   "distance": 1
  },
  {
   "yaw": -97.81,
   "backwardYaw": -3.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B",
   "distance": 1
  },
  {
   "yaw": 97.1,
   "backwardYaw": -3.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B",
   "distance": 1
  }
 ],
 "hfov": 360
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CC2D112D_D528_0170_41DA_CA5D364B7825.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CC2D112D_D528_0170_41DA_CA5D364B7825.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "vanphong"
 },
 "id": "audio_CC2D112D_D528_0170_41DA_CA5D364B7825",
 "maximumAngle": 360
},
{
 "easing": "linear",
 "duration": 0,
 "id": "effect_D94881C6_C76E_B712_41E1_EC19BC683172",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.41,
  "class": "PanoramaCameraPosition",
  "pitch": -12.01
 },
 "id": "panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.81,
  "class": "PanoramaCameraPosition",
  "pitch": 1.79
 },
 "id": "panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.62,
  "class": "PanoramaCameraPosition",
  "pitch": -25.98
 },
 "id": "panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 143.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C3DD67FE_D5B0_6E0A_41D6_4856F333E2DC",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "yaw": 0,
 "audio": {
  "mp3Url": "media/audio_CDCA6B4B_D528_0137_4173_3073602923EA.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_CDCA6B4B_D528_0137_4173_3073602923EA.ogg"
 },
 "class": "DirectionalPanoramaAudio",
 "pitch": 0,
 "data": {
  "label": "sanxuat"
 },
 "id": "audio_CDCA6B4B_D528_0137_4173_3073602923EA",
 "maximumAngle": 360
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.89,
  "class": "PanoramaCameraPosition",
  "pitch": -54.38
 },
 "id": "panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.album_E7E4EC7B_CE60_013E_419B_7D09659003AF",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.playList_C0BA5708_D5B0_6FF6_41E0_BFBDB6F79D4B, 0)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.loopAlbum(this.playList_C0BA5708_D5B0_6FF6_41E0_BFBDB6F79D4B, 0)",
   "player": "this.ViewerAreaLabeled_D012FD72_C712_AFF2_41DF_E5E4B65552A3PhotoAlbumPlayer"
  }
 ],
 "id": "playList_C0BA5708_D5B0_6FF6_41E0_BFBDB6F79D4B",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C062F7A5_D5B0_6E3E_41D6_30F8F8EE5F13",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C406E86F_D5B0_620A_41CA_5E8BC14C68AE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 142.73,
  "class": "PanoramaCameraPosition",
  "pitch": -28.6
 },
 "id": "panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_camera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingBottom": 0,
 "id": "MainViewer",
 "transitionMode": "blending",
 "width": "100%",
 "playbackBarHeadShadow": true,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipBorderColor": "#767676",
 "progressBottom": 0,
 "toolTipShadowSpread": 0,
 "progressHeight": 10,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "progressBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "toolTipPaddingRight": 10,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderRadius": 0,
 "toolTipFontSize": "2vmin",
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontColor": "#606060",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 50,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "shadow": false,
 "toolTipPaddingBottom": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "minWidth": 100,
 "progressRight": 0,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "toolTipBorderSize": 1,
 "progressBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressOpacity": 1,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipDisplayTime": 200,
 "progressBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipPaddingTop": 6
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D6CC6C83_C6F7_AD12_41E1_1A0F606A8FCA",
  "this.Container_D6CCDC83_C6F7_AD12_41DC_0BC36E67B283"
 ],
 "id": "Container_D6B62C84_C6F7_AD16_41BA_0C2F2B515F55",
 "left": "0%",
 "layout": "absolute",
 "width": 330,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": false,
 "contentOpaque": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_DFB3C2A0_C711_750E_41CE_EC0970006A08",
  "this.IconButton_D0425250_C712_D50E_41B1_C57530EA37A0",
  "this.IconButton_D1625652_C712_DD32_41E7_BA03B3169CCC",
  "this.IconButton_DFFCB965_C712_D716_41E5_78C87BD2C178"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DDDA401D_C711_B536_41AB_5317F38E02BE",
 "left": "40%",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "right": "40%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "5%",
 "borderRadius": 13,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "height": "10.072%",
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container15002"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_DCB8F9BA_C711_5772_41DA_8415405DAB7E"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DCBE79BA_C711_5772_41DD_AF5B15734173",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_DCBE79BA_C711_5772_41DD_AF5B15734173, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_DF555305_C712_BB17_41D2_7ED89E59E42D"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DF54F305_C712_BB17_41BB_4B3D501DEA86",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_DF54F305_C712_BB17_41BB_4B3D501DEA86, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D0137D72_C712_AFF2_41E3_D39EB13B153C"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_D0122D72_C712_AFF2_418D_3B7B68D86106",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_D0122D72_C712_AFF2_418D_3B7B68D86106, true, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_DE0CF3F3_C711_5AF2_41CC_C9F591887E7B"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DE0C03F3_C711_5AF2_41E0_7E054AD2CD43",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_DE0C03F3_C711_5AF2_41E0_7E054AD2CD43, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 25,
 "children": [
  "this.IconButton_E733F2CF_C711_D513_41E2_6E80E955F42B",
  "this.IconButton_E5264D7F_C711_6FF2_41C7_84A674825734",
  "this.IconButton_D9E42DE8_C71E_AF1E_41E3_6F1F3FC3A4C3"
 ],
 "id": "Container_DA201A41_C76F_550E_41DB_4A680D855936",
 "layout": "vertical",
 "width": "5.62%",
 "verticalAlign": "top",
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 25,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 25,
 "minWidth": 1,
 "height": "38.061%",
 "propagateClick": false,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container36044"
 },
 "horizontalAlign": "left",
 "gap": 10,
 "paddingRight": 5
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_DAD002BF_D5B0_260A_41C8_44F8A0888D48",
  "this.Container_DAD022BF_D5B0_260A_41B2_A816346868B0"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DAD042BF_D5B0_260A_41DE_03705AB8CE8A",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_DAD042BF_D5B0_260A_41DE_03705AB8CE8A, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "YoutubeVideo"
 },
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "gap": 10
},
{
 "iconURL": "skin/IconButton_D9E42DE8_C71E_AF1E_41E3_6F1F3FC3A4C3.png",
 "paddingBottom": 0,
 "maxWidth": 128,
 "id": "IconButton_D9E42DE8_C71E_AF1E_41E3_6F1F3FC3A4C3",
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipFontColor": "#606060",
 "verticalAlign": "middle",
 "toolTipPaddingLeft": 10,
 "width": 30,
 "toolTipBorderRadius": 3,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "minHeight": 1,
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipBorderColor": "#767676",
 "borderRadius": 0,
 "toolTipShadowSpread": 0,
 "mode": "toggle",
 "shadow": false,
 "toolTipPaddingBottom": 6,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "height": 30,
 "toolTipBorderSize": 1,
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowBlurRadius": 3,
 "data": {
  "name": "IconButton1493"
 },
 "horizontalAlign": "center",
 "toolTipFontSize": "2vmin",
 "toolTipPaddingRight": 10,
 "toolTip": "Fullscreen",
 "paddingRight": 0,
 "transparencyActive": true,
 "toolTipPaddingTop": 6,
 "toolTipDisplayTime": 200,
 "cursor": "hand",
 "toolTipFontFamily": "Arial"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -3.29,
   "yaw": 89.06,
   "hfov": 8.77
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.29,
   "hfov": 8.77
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D, this.camera_C38897E3_D5B0_6E3A_41D0_BFE08C2108D4); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c s\u1ea3n xu\u1ea5t - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2F795C8_CAA0_2659_41E8_7D77215268D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52CBC5C_CEE0_017B_41B5_966AE995BF11",
   "yaw": 89.14,
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 21.93
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E42064C5_CE60_014A_41E7_6875FEBAC53D",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.47,
   "hfov": 21.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D5FC59_CEE0_017D_41D4_14164DB29061",
   "yaw": -36.32,
   "pitch": -18.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.53
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -36.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.62,
   "hfov": 8.53
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354, this.camera_C04577B7_D5B0_6E1A_41CA_9A1FB824A219); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu s\u1ea3n xu\u1ea5t - 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DC3DBDF2_CAA0_2649_41E8_9B80C19AEE42",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D41C5A_CEE0_017F_41D9_F8E2545DDFBD",
   "yaw": 3.68,
   "pitch": -14.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.73
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.01,
   "hfov": 8.73
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D, this.camera_C070B79C_D5B0_6E0E_41D3_B52F5671B93E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu s\u1ea3n xu\u1ea5t - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DC5F0411_CAA0_25CA_41DF_B7E729AFF793",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_2_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -11.18,
   "yaw": 55.94,
   "hfov": 5.89
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 55.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.18,
   "hfov": 5.89
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A, this.camera_C062F7A5_D5B0_6E3E_41D6_30F8F8EE5F13); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D226CDA0_CBA0_66CA_41E4_21C69B3AE515",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_4_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -12.88,
   "yaw": -108.35,
   "hfov": 5.85
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -108.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.88,
   "hfov": 5.85
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5, this.camera_C05287AE_D5B0_6E0A_41E9_80C11A0801B8); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn l\u1ec5 t\u00e2n",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2494098_CBA0_1EFA_41CC_0F5C03833E88",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D4DC5A_CEE0_017F_41CC_A11AB6052C5D",
   "yaw": 55.95,
   "pitch": -11.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.71
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E876ACFE_CE60_0137_41E4_E40CC484B8D3",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 55.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.25,
   "hfov": 14.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52B6C5A_CEE0_017F_41E9_386FCBC8C8E2",
   "yaw": -108.34,
   "pitch": -12.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.62
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E9FACAA7_CEA0_01D6_41D2_E75E1A60FFAD",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -108.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.93,
   "hfov": 14.62
  }
 ]
},
{
 "iconURL": "skin/IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D.png",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D_pressed.png",
 "width": "14.22%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "rollOverIconURL": "skin/IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D_rollover.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D_pressed_rollover.png",
 "cursor": "hand"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderSize": 0,
 "id": "ViewerAreaLabeled_D012FD72_C712_AFF2_41DF_E5E4B65552A3",
 "left": "0%",
 "width": "100%",
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionColor": "#FF6600",
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipBorderColor": "#767676",
 "progressBottom": 2,
 "toolTipShadowSpread": 0,
 "progressHeight": 6,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "progressBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "toolTipPaddingRight": 10,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderRadius": 0,
 "toolTipFontSize": "2vmin",
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarBackgroundColorDirection": "vertical",
 "show": "this.ViewerAreaLabeled_D012FD72_C712_AFF2_41DF_E5E4B65552A3.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C0BA5708_D5B0_6FF6_41E0_BFBDB6F79D4B.set('selectedIndex', -1); }, this); this.playList_C0BA5708_D5B0_6FF6_41E0_BFBDB6F79D4B.set('selectedIndex', 0)",
 "playbackBarRight": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontColor": "#606060",
 "progressBarBorderSize": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "progressBarBorderRadius": 0,
 "top": "0%",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "shadow": false,
 "toolTipPaddingBottom": 6,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "minWidth": 1,
 "progressRight": 0,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "toolTipBorderSize": 1,
 "progressBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressOpacity": 1,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingTop": 6,
 "toolTipDisplayTime": 200,
 "progressBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "iconURL": "skin/IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5.png",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "right": 10,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5_pressed.png",
 "width": "14.22%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "rollOverIconURL": "skin/IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5_rollover.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5_pressed_rollover.png",
 "cursor": "hand"
},
{
 "items": [
  {
   "media": "this.album_E7E4EC7B_CE60_013E_419B_7D09659003AF_0",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_inside",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_E7EE39F8_CE60_033B_41E2_BCA590851EC1",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_inside",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_E639C3CC_CE60_075B_41C3_B45422C4FD13",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_inside",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_E637FD7F_CE60_0335_41D4_F8A2181E9B0C",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_inside",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    }
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_E7E4EC7B_CE60_013E_419B_7D09659003AF_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52D4C5B_CEE0_017D_41D9_CCBF381EA66B",
   "yaw": -36.17,
   "pitch": -25.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.13
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -36.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.42,
   "hfov": 8.13
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A, this.camera_C4732897_D5B0_621A_41E5_73586DC49DA7); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D3B70E5F_CDA0_0175_41D4_909045061915",
 "class": "HotspotPanoramaOverlay"
},
{
 "iconURL": "skin/IconButton_E5264D7F_C711_6FF2_41C7_84A674825734.png",
 "paddingBottom": 0,
 "id": "IconButton_E5264D7F_C711_6FF2_41C7_84A674825734",
 "width": 30,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_E5264D7F_C711_6FF2_41C7_84A674825734_pressed.png",
 "class": "IconButton",
 "minHeight": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_E5264D7F_C711_6FF2_41C7_84A674825734_rollover.png",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "height": 30,
 "propagateClick": false,
 "data": {
  "name": "Button8704"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_E733F2CF_C711_D513_41E2_6E80E955F42B.png",
 "paddingBottom": 0,
 "id": "IconButton_E733F2CF_C711_D513_41E2_6E80E955F42B",
 "width": 30,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_E733F2CF_C711_D513_41E2_6E80E955F42B_pressed.png",
 "class": "IconButton",
 "minHeight": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_E733F2CF_C711_D513_41E2_6E80E955F42B_rollover.png",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "height": 30,
 "propagateClick": false,
 "data": {
  "name": "Button8715"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -32.31,
   "yaw": -133.74,
   "hfov": 7.43
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -133.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.31,
   "hfov": 7.43
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5, this.camera_C47D78A0_D5B0_6236_41BA_3FEFAA1A61AC); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c l\u1ec5 t\u00e2n",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DDCF8462_CAA0_264E_41E0_56546105EDFF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D58C59_CEE0_017D_41D9_1347A84AB633",
   "yaw": -133.81,
   "pitch": -32.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 18.57
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EF911586_CE60_03D7_41E4_E77411D73651",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -133.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.33,
   "hfov": 18.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52F9C5B_CEE0_017D_41D0_5349D1DF1C85",
   "yaw": 13.2,
   "pitch": -12.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.79
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 13.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.26,
   "hfov": 8.79
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A, this.camera_C3A977D1_D5B0_6E16_41CE_378B508390C5); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef - 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2EBCDBE_CDA0_0337_41C8_36E7D2EE6C56",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_1_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -5.69,
   "yaw": 118.81,
   "hfov": 5.97
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 118.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.69,
   "hfov": 5.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu s\u1ea3n xu\u1ea5t - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D281E95A_CDA0_037E_41E7_FD43D09CAF7E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0B5FDD0_CE60_034B_41D6_9300559D2FA5",
   "yaw": 174.41,
   "pitch": -22.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.3
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 174.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.69,
   "hfov": 8.3
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A, this.camera_C39907DA_D5B0_6E0A_41DD_A5816AE6CAF5); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EF31D83C_CDA0_013B_41D8_0FE1930489E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52EBC5B_CEE0_017D_41D1_7514B4487BE8",
   "yaw": 118.88,
   "pitch": -5.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.93
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EFB2C8CF_CE60_0156_41E5_CAD8E6010CDA",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 118.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.67,
   "hfov": 14.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -27.25,
   "yaw": -166.68,
   "hfov": 7.81
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -166.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.25,
   "hfov": 7.81
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D, this.camera_C0000793_D5B0_6E1A_41CE_D128D1E2D107); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c s\u1ea3n xu\u1ea5t - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2B90CA6_CAA0_26D6_41E0_7B0ECB5F2A6D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52C3C5C_CEE0_017B_41E9_2638C68EB800",
   "yaw": -166.54,
   "pitch": -27.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.52
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E450102E_CE60_00D7_41E7_FA136994FD3E",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -166.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.33,
   "hfov": 19.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -6.3,
   "yaw": 156.72,
   "hfov": 8.74
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn l\u1ec5 t\u00e2n",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2F9053B_CAA0_263F_41E1_4FAFC8332DB4",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 156.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.3,
   "hfov": 8.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D53C59_CEE0_017D_41CE_C415FC65FCC3",
   "yaw": 156.8,
   "pitch": -6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 21.84
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 156.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.25,
   "hfov": 21.84
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5, this.camera_C33CB80F_D5B0_620A_41E5_709AF528234B); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn l\u1ec5 t\u00e2n",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D690DE4A_CBA0_625E_41E5_AE4F44426969",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0_HS_3_0.png",
      "width": 799,
      "class": "ImageResourceLevel",
      "height": 799
     }
    ]
   },
   "pitch": -6.79,
   "yaw": -3.06,
   "hfov": 23.83
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.79,
   "hfov": 23.83
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0, this.camera_C32F0817_D5B0_621A_41E9_35F89ED9BEF2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DA373974_CA60_2E4A_41C8_0947229A1AC3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0_HS_4_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 1253
     }
    ]
   },
   "pitch": -35.59,
   "roll": 0,
   "yaw": -5.56,
   "hfov": 58.58
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ]
   },
   "yaw": -5.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.59,
   "hfov": 58.58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0, this.camera_C31E2821_D5B0_6236_41C7_EF1E48F24E65); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_C4B29C05_CA60_65CA_41CB_7ACACFB7C75C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52ABC5A_CEE0_017F_41DD_8557F02F8D36",
   "yaw": 45.85,
   "pitch": -24.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.2
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 45.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.42,
   "hfov": 8.2
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354, this.camera_C476488D_D5B0_620E_41C1_39A8B11E7B2F); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn Khu v\u1ef1c s\u1ea3n xu\u1ea5t - 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DC804295_CAA0_22CA_41B1_DAD39A95CA68",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FCDA0DAD_CE60_03D5_41D1_0D0D61926820",
   "yaw": 2.1,
   "pitch": -18.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.54
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.44,
   "hfov": 8.54
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F, this.camera_C40C1882_D5B0_62FA_41D6_79CE31C4CFB7); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn Khu v\u1ef1c s\u1ea3n xu\u1ea5t - 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DF31A2DB_CAA0_227E_41B7_E2B0D6A75C7A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_2_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -11.56,
   "yaw": 128.85,
   "hfov": 5.88
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 128.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.56,
   "hfov": 5.88
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6, this.camera_C4035878_D5B0_6216_41E1_893EFA0CF186); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn ph\u00f2ng t\u1ed1i",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2D546AF_CAA0_22D6_41D9_92218BB07B0B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_3_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -7.58,
   "yaw": 149.85,
   "hfov": 5.95
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 149.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.58,
   "hfov": 5.95
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7, this.camera_C406E86F_D5B0_620A_41CA_5E8BC14C68AE); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu g\u1eafn ch\u00edp",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DD238E6C_CAA0_6259_41C5_8F442BD9B3F9",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_4_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -9.23,
   "yaw": -77,
   "hfov": 5.92
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.23,
   "hfov": 5.92
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_ED78D7AA_CDA0_0FDF_41D1_6D1CFD532FD3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5280C5B_CEE0_017D_41C7_B6F330A214D3",
   "yaw": -77.01,
   "pitch": -9.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.81
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E9D20A9B_CE60_01FE_41E5_5BED228E5593",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -77.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.22,
   "hfov": 14.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5286C5B_CEE0_017D_41DB_421A3F093527",
   "yaw": 128.84,
   "pitch": -11.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.7
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E9E8F82C_CE60_00DA_41E5_230563A6A959",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 128.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.56,
   "hfov": 14.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E528BC5B_CEE0_017D_41E4_A012D8680A43",
   "yaw": 149.89,
   "pitch": -7.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.87
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E8E59769_CE60_0F5D_41E5_9CC88C640221",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 149.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.56,
   "hfov": 14.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52EFC5B_CEE0_017D_41C5_75E6745FEE61",
   "yaw": -159.64,
   "pitch": -13.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.74
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.78,
   "hfov": 8.74
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49, this.camera_C3CD1806_D5B0_61FA_41D6_62CFB49A3E55); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef - 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D3685C6D_CDA0_0155_41CE_358A711C6DBE",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52D3C5B_CEE0_017D_41E9_9424365E8DC6",
   "yaw": 24.99,
   "pitch": -18.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.55
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 24.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.14,
   "hfov": 8.55
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09, this.camera_C3DD67FE_D5B0_6E0A_41D6_4856F333E2DC); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef - 4",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EC1765FC_CDA0_033B_41E9_60A769AEF7C6",
 "class": "HotspotPanoramaOverlay"
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_4_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.08,
   "yaw": 94.21,
   "hfov": 6
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 94.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.08,
   "hfov": 6
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CDF8D72C_C6E8_BAF9_41CE_D504C66C6D33, this.camera_D0718A35_CBA0_2DCA_41D6_FE77FF17B5C3)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c v\u0103n ph\u00f2ng",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DD08C850_C7CA_1B97_41C7_89D09606B471",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_6_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.83,
   "yaw": -48.75,
   "hfov": 6
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -48.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.83,
   "hfov": 6
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F, this.camera_C0DBF765_D5B0_6E3E_41E1_3B77938CCFA2); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c s\u1ea3n xu\u1ea5t - 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DD15D6B9_C7F6_1489_41CF_1D7CFBF3A17D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_7_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 23.57,
   "yaw": -85.11,
   "hfov": 5.5
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -85.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.57,
   "hfov": 5.5
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2, this.camera_C0EFA752_D5B0_6E1A_41D3_B419651043C9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u00e3o h\u00f3a",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DCC8EC9B_C7F6_3489_41DB_666815C6AFD2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DAEB9EE8_CA60_225A_41E2_974D9D13BBE5",
   "yaw": 94.19,
   "pitch": -1.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 94.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.11,
   "hfov": 15
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8, this.camera_C0F91743_D5B0_6E7A_41E4_70FA2901758A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u0103n ph\u00f2ng",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DC104F90_C7CE_3497_41D8_816E497B08A8",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DAEB5EE8_CA60_225A_41D8_90EA5103E462",
   "yaw": -48.71,
   "pitch": -1.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.99
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -48.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.85,
   "hfov": 14.99
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F, this.camera_C0CDC76E_D5B0_6E0B_41E6_E37C972DF969); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu s\u1ea3n xu\u1ea5t",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DD28B504_C7CB_F57F_41DF_B2A7D8B828CB",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DAECEEE8_CA60_225A_41D5_B8ED9A4EC72B",
   "yaw": -85.09,
   "pitch": 23.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.75
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -85.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.54,
   "hfov": 13.75
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2, this.camera_C0D5575C_D5B0_6E0E_41E9_B7080F98BE66); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u00e3o h\u00f3a",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DE40CC6A_C7F6_1B8B_41C8_BB3C8954D78E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D245EDF8_CAA1_E63A_41C5_19C8B2A96271",
   "yaw": -175.38,
   "pitch": -43.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.4
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -175.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.7,
   "hfov": 12.4
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0, this.camera_C0F3E734_D5B0_6E1E_41D4_B9C441DE879D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DA348B72_CAA0_224E_41D6_19D9CAD2A3E8",
 "class": "HotspotPanoramaOverlay"
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_9_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 166
     }
    ]
   },
   "pitch": 4.67,
   "yaw": -5.24,
   "hfov": 7.11
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_9_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.67,
   "hfov": 7.11
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_DAD042BF_D5B0_260A_41DE_03705AB8CE8A, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "Gi\u1edbi thi\u1ec7u v\u1ec1 c\u00f4ng ty TLC",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_C6B338D8_D538_00D1_41E9_6D3E7F97AA8F",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E743BD34_CEE0_00CA_41E3_65F945040E87",
   "yaw": 164.15,
   "pitch": -23.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.28
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 164.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.01,
   "hfov": 8.28
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F, this.camera_C3EB67F4_D5B0_6E1E_41E3_3E86F3451CA7); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c s\u1ea3n xu\u1ea5t - 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DCE1FC69_CAA0_265A_41C7_B630C3EFD502",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52BCC5A_CEE0_017F_41B6_79E7DABB4884",
   "yaw": 20.53,
   "pitch": -27.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.01
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 20.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.09,
   "hfov": 8.01
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D, this.camera_C3FB57EB_D5B0_6E0A_41D3_0CF7FF83D1CE); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu v\u1ef1c s\u1ea3n xu\u1ea5t - 3",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DCB7D4F7_CAA0_2636_41D6_2CA5F6090AA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -13.16,
   "yaw": 90.82,
   "hfov": 5.84
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.16,
   "hfov": 5.84
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u01b0u tr\u1eef",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EFDFDB6B_CE60_075D_41CA_5AD8550FC0A5",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52A4C5A_CEE0_017F_41D2_56CDFFC2AD2A",
   "yaw": 90.83,
   "pitch": -13.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.61
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E842A27C_CE60_013A_41D5_919A6ECF7E76",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.16,
   "hfov": 14.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -5.61,
   "yaw": -2.75,
   "hfov": 5.97
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D5300DEF_CA60_E656_41D8_2A6B8B699904",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.61,
   "hfov": 5.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52F2C5B_CEE0_017D_41C0_BFC27720733E",
   "yaw": -2.79,
   "pitch": -5.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.93
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.63,
   "hfov": 14.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F, this.camera_C3B747C0_D5B0_6E76_41E6_DD5941CD0A9D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu s\u1ea3n xu\u1ea5t",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D7085C9E_CA60_26F9_41E8_3EDAF5FD090A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52F6C5B_CEE0_017D_41D3_F3679BBA8C39",
   "yaw": 94.11,
   "pitch": -10.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.85
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 94.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.35,
   "hfov": 8.85
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49, this.camera_C3A747C9_D5B0_6E76_41E3_A3E0E5DC5FB4); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfm khu l\u01b0u tr\u1eef - 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D6587E18_CA60_25FA_41C8_173B4CE1C7A1",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_3_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": 8.6,
   "yaw": -97.81,
   "hfov": 5.93
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.6,
   "hfov": 5.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B, this.camera_C02FA781_D5B0_6EF6_41D9_8A28C0917682); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "toolTip": "Chuy\u1ec3n \u0111\u1ebfn to\u00e0n c\u1ea3nh",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D2C2FF8A_C7B6_348B_41E6_84524F160CAF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_5_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": 8.7,
   "yaw": 97.1,
   "hfov": 5.93
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 97.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.7,
   "hfov": 5.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFE024A_C6E8_BAB8_41B2_AE97E9DECE0B, this.camera_C01ED78A_D5B0_6E0A_41B3_4BA84AB9BE3A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "toolTip": "Chuy\u1ec3n \u0111\u1ebfn to\u00e0n c\u1ea3nh",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D3FC6A54_C7B6_FF9F_41C4_348AEA5D43E2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D08C59_CEE0_017D_41D7_B9239B868333",
   "yaw": 0.98,
   "pitch": -20.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.41
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_9_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.86,
   "hfov": 8.41
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5, this.camera_C03FD778_D5B0_6E16_41E7_DE502EF67CDC); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "toolTip": "\u0110i \u0111\u1ebfn khu l\u1ec5 t\u00e2n",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_DA2EE2CD_CA63_E25A_41CB_7A947615BAA8",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D0DC59_CEE0_017D_419C_0D82F019B0A8",
   "yaw": -97.81,
   "pitch": 8.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.83
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_E869375E_CEA0_0F77_41DD_C91747FE5357",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.59,
   "hfov": 14.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D70C59_CEE0_017D_41E0_884A47089BBB",
   "yaw": 97.03,
   "pitch": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.83
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EA103475_CEA0_014A_41E7_68193C0EA1DF",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 97.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.7,
   "hfov": 14.83
  }
 ]
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D6CC3C83_C6F7_AD12_41E7_B9E2646954FA",
  "this.IconButton_D6CC1C83_C6F7_AD12_41C7_B88530862763"
 ],
 "id": "Container_D6CC6C83_C6F7_AD12_41E1_1A0F606A8FCA",
 "left": "0%",
 "layout": "absolute",
 "width": 66,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": true,
 "contentOpaque": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D6CCBC83_C6F7_AD12_41E5_5EB4F5891DEE",
  "this.IconButton_D6B64C84_C6F7_AD16_41E1_5D071DAD5E91"
 ],
 "id": "Container_D6CCDC83_C6F7_AD12_41DC_0BC36E67B283",
 "layout": "absolute",
 "width": 330,
 "verticalAlign": "top",
 "right": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": false,
 "contentOpaque": false,
 "data": {
  "name": "- EXPANDED"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "iconURL": "skin/IconButton_DFB3C2A0_C711_750E_41CE_EC0970006A08.png",
 "paddingBottom": 0,
 "maxWidth": 200,
 "id": "IconButton_DFB3C2A0_C711_750E_41CE_EC0970006A08",
 "maxHeight": 200,
 "verticalAlign": "middle",
 "width": 48.6,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 46,
 "click": "this.setComponentVisibility(this.Container_DCBE79BA_C711_5772_41DD_AF5B15734173, true, 0, this.effect_DBF13567_C773_5F12_41CF_EBD89F387B08, 'showEffect', false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton16007"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_D0425250_C712_D50E_41B1_C57530EA37A0.png",
 "paddingBottom": 0,
 "maxWidth": 200,
 "id": "IconButton_D0425250_C712_D50E_41B1_C57530EA37A0",
 "maxHeight": 200,
 "verticalAlign": "middle",
 "width": 48.6,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 46,
 "click": "this.setComponentVisibility(this.Container_DF54F305_C712_BB17_41BB_4B3D501DEA86, true, 0, this.effect_DB9C4126_C773_7712_41E7_E3FB08315F94, 'showEffect', false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton16007"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_D1625652_C712_DD32_41E7_BA03B3169CCC.png",
 "paddingBottom": 0,
 "maxWidth": 200,
 "id": "IconButton_D1625652_C712_DD32_41E7_BA03B3169CCC",
 "maxHeight": 200,
 "verticalAlign": "middle",
 "width": 48.6,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 46,
 "click": "this.setComponentVisibility(this.Container_DE0C03F3_C711_5AF2_41E0_7E054AD2CD43, true, 0, this.effect_DB9DDC76_C773_ADF2_41B5_AF9530CFAB64, 'showEffect', false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton16007"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_DFFCB965_C712_D716_41E5_78C87BD2C178.png",
 "paddingBottom": 0,
 "maxWidth": 200,
 "id": "IconButton_DFFCB965_C712_D716_41E5_78C87BD2C178",
 "maxHeight": 200,
 "verticalAlign": "middle",
 "width": 48.6,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 46,
 "click": "this.setComponentVisibility(this.Container_D0122D72_C712_AFF2_418D_3B7B68D86106, true, 0, this.effect_DAB876B5_C773_DD77_41E0_47F941FA2B5A, 'showEffect', false)",
 "propagateClick": false,
 "data": {
  "name": "IconButton16007"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "cursor": "hand"
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 37,
 "children": [
  "this.Container_DCBE09BA_C711_5772_41E4_FC2D4D6515E3",
  "this.Container_DF6E2D0D_C737_AF16_41C1_89B0220FB1CF"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DCB8F9BA_C711_5772_41DA_8415405DAB7E",
 "left": "20%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "right": "20%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 25,
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 25,
 "minWidth": 1,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "paddingRight": 25,
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 20,
 "children": [
  "this.Container_DF055D4F_C717_6F12_41E5_05313D6D185B",
  "this.Image_DEE61D9D_C731_6F36_41D6_F10A7292D65E"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DF555305_C712_BB17_41D2_7ED89E59E42D",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 20,
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left",
 "paddingRight": 20,
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D012BD72_C712_AFF2_41E6_08EA5031C0D7",
  "this.Container_D012ED72_C712_AFF2_41DC_0442CDDE3DC0"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_D0137D72_C712_AFF2_41E3_D39EB13B153C",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_DE0CC3F3_C711_5AF2_41DE_41A6DDC2EBF8",
  "this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DE0CF3F3_C711_5AF2_41CC_C9F591887E7B",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.WebFrame_DAD032BF_D5B0_260A_41C4_11A687733455"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DAD002BF_D5B0_260A_41C8_44F8A0888D48",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "bottom": "10%",
 "shadow": true,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_DAD052BF_D5B0_260A_41C4_D1A1EF648C98"
 ],
 "id": "Container_DAD022BF_D5B0_260A_41B2_A816346868B0",
 "left": "15%",
 "layout": "vertical",
 "verticalAlign": "top",
 "right": "15%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "bottom": "80%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "propagateClick": false,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "paddingRight": 20,
 "gap": 10
},
{
 "levels": [
  {
   "url": "media/panorama_CA71D83F_C6EB_F6D8_41D2_CC7224190CA7_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52CBC5C_CEE0_017B_41B5_966AE995BF11",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D5FC59_CEE0_017D_41D4_14164DB29061",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D41C5A_CEE0_017F_41D9_F8E2545DDFBD",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D4DC5A_CEE0_017F_41CC_A11AB6052C5D",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CD9914F2_C6EB_9F69_41E4_AB855051C28F_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52B6C5A_CEE0_017F_41E9_386FCBC8C8E2",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CACEAA55_C6EB_8AAB_41E6_8C9DE3C51A09_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52D4C5B_CEE0_017D_41D9_CCBF381EA66B",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA7EFB01_C6EB_8AA8_41C5_D6857E130FB2_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D58C59_CEE0_017D_41D9_1347A84AB633",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52F9C5B_CEE0_017D_41D0_5349D1DF1C85",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E0B5FDD0_CE60_034B_41D6_9300559D2FA5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6D051F_C6EB_7ED7_41E8_3C6D1A638E49_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52EBC5B_CEE0_017D_41D1_7514B4487BE8",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CD2E8138_C6EB_F6D9_41E3_DB9FCBE39EC6_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52C3C5C_CEE0_017B_41E9_2638C68EB800",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA8C3EA0_C6EB_8BE8_41C6_33AB119831C8_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D53C59_CEE0_017D_41CE_C415FC65FCC3",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52ABC5A_CEE0_017F_41DD_8557F02F8D36",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_FCDA0DAD_CE60_03D5_41D1_0D0D61926820",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5280C5B_CEE0_017D_41C7_B6F330A214D3",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5286C5B_CEE0_017D_41DB_421A3F093527",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA831E8B_C6EB_8BBF_41DA_99B90EA6605D_0_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E528BC5B_CEE0_017D_41E4_A012D8680A43",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52EFC5B_CEE0_017D_41C5_75E6745FEE61",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA827DBB_C6EB_89D8_41D9_2925F3ECC99A_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52D3C5B_CEE0_017D_41E9_9424365E8DC6",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_DAEB9EE8_CA60_225A_41E2_974D9D13BBE5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_DAEB5EE8_CA60_225A_41D8_90EA5103E462",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_DAECEEE8_CA60_225A_41D5_B8ED9A4EC72B",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA6E3EB8_C6E8_8BD8_417F_B8DD1650D2E5_0_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_D245EDF8_CAA1_E63A_41C5_19C8B2A96271",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E743BD34_CEE0_00CA_41E3_65F945040E87",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52BCC5A_CEE0_017F_41B6_79E7DABB4884",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA55C1A8_C6EB_B9F8_41D9_8BA3622F6354_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52A4C5A_CEE0_017F_41D2_56CDFFC2AD2A",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52F2C5B_CEE0_017D_41C0_BFC27720733E",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CA4993AA_C6E8_99F8_4170_6B7850D43D2A_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E52F6C5B_CEE0_017D_41D3_F3679BBA8C39",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_9_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D08C59_CEE0_017D_41D7_B9239B868333",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D0DC59_CEE0_017D_419C_0D82F019B0A8",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_CAFAF268_C6E8_9B79_41E8_16F1EB90AFE0_0_HS_11_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_E5D70C59_CEE0_017D_41E0_884A47089BBB",
 "colCount": 4
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6CC3C83_C6F7_AD12_41E7_B9E2646954FA",
 "left": "0%",
 "layout": "absolute",
 "width": 36,
 "verticalAlign": "top",
 "backgroundOpacity": 0.4,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "iconURL": "skin/IconButton_D6CC1C83_C6F7_AD12_41C7_B88530862763.png",
 "paddingBottom": 0,
 "maxWidth": 80,
 "id": "IconButton_D6CC1C83_C6F7_AD12_41C7_B88530862763",
 "left": 10,
 "maxHeight": 80,
 "verticalAlign": "middle",
 "width": 50,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_D6CC1C83_C6F7_AD12_41C7_B88530862763_rollover.png",
 "bottom": "40%",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_D6CCDC83_C6F7_AD12_41DC_0BC36E67B283, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_D6CC6C83_C6F7_AD12_41E1_1A0F606A8FCA, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "cursor": "hand"
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D6CCAC83_C6F7_AD12_41E0_1286F1193795"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_D6CCBC83_C6F7_AD12_41E5_5EB4F5891DEE",
 "left": "0%",
 "layout": "absolute",
 "width": "90%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "iconURL": "skin/IconButton_D6B64C84_C6F7_AD16_41E1_5D071DAD5E91.png",
 "paddingBottom": 0,
 "maxWidth": 50,
 "id": "IconButton_D6B64C84_C6F7_AD16_41E1_5D071DAD5E91",
 "width": 50,
 "verticalAlign": "middle",
 "right": 9,
 "maxHeight": 50,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_D6B64C84_C6F7_AD16_41E1_5D071DAD5E91_rollover.png",
 "bottom": "40%",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_D6CCDC83_C6F7_AD12_41DC_0BC36E67B283, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_D6CC6C83_C6F7_AD12_41E1_1A0F606A8FCA, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": true,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_DD41C6F2_C73E_BD0D_41E6_9771CF7A8FC8",
  "this.IconButton_DCBE19BA_C711_5772_41D8_421BA80C3121"
 ],
 "id": "Container_DCBE09BA_C711_5772_41E4_FC2D4D6515E3",
 "layout": "horizontal",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "height": 138.05,
 "propagateClick": false,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "gap": 10,
 "paddingRight": 20
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Image_DB936A32_C731_D50D_41E7_C47917840882",
  "this.HTMLText_DD6CFE7D_C732_ADF6_41C7_BB3AEB561D13"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DF6E2D0D_C737_AF16_41C1_89B0220FB1CF",
 "layout": "vertical",
 "width": "97.135%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1000,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "32.16%",
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container23288"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_D0E56D31_C717_6F0E_41DF_C6A27C960AC5",
  "this.IconButton_D0F9FD32_C717_6F72_41E8_4CCCB23CBB56"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DF055D4F_C717_6F12_41E5_05313D6D185B",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 152.8,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 0,
 "maxWidth": 1567,
 "id": "Image_DEE61D9D_C731_6F36_41D6_F10A7292D65E",
 "maxHeight": 765,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "url": "skin/Image_DEE61D9D_C731_6F36_41D6_F10A7292D65E.png",
 "width": "100%",
 "class": "Image",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100.101%",
 "click": "this.openLink('https://www.google.com/maps/place/TLC+LIGHTING/@20.5217967,105.8873659,14.11z/data=!4m6!3m5!1s0x3135d1861d1ec8bf:0xb8b82038d25c7919!8m2!3d20.5210779!4d105.8939331!16s%2Fg%2F11r4b3t5gs?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "propagateClick": false,
 "data": {
  "name": "Image21012"
 },
 "horizontalAlign": "center",
 "scaleMode": "fill",
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_D0128D72_C712_AFF2_41E2_4E23FA032E84",
  "this.IconButton_D0129D72_C712_AFF2_41E8_B4A330439B14"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_D012BD72_C712_AFF2_41E6_08EA5031C0D7",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_D012FD72_C712_AFF2_41DF_E5E4B65552A3",
  "this.IconButton_D012CD72_C712_AFF2_41E6_5C9D47694A3D",
  "this.IconButton_D012DD72_C712_AFF2_41D7_F216A1C696F5"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_D012ED72_C712_AFF2_41DC_0442CDDE3DC0",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_DE0CD3F3_C711_5AF2_41BC_7AF0497620CF",
  "this.IconButton_DE0C23F3_C711_5AF2_41E8_C95AE05970BB"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_DE0CC3F3_C711_5AF2_41DE_41A6DDC2EBF8",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "paddingBottom": 70,
 "backgroundColorDirection": "vertical",
 "id": "ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailOpacity": 1,
 "itemBackgroundColor": [],
 "verticalAlign": "middle",
 "itemLabelGap": 7,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemThumbnailWidth": 220,
 "width": "100%",
 "class": "ThumbnailGrid",
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadow": true,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 70,
 "itemOpacity": 1,
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "borderSize": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemMaxWidth": 1000,
 "itemLabelFontWeight": "normal",
 "height": "100%",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemMinHeight": 50,
 "itemLabelTextDecoration": "none",
 "itemHorizontalAlign": "center",
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat",
 "itemBackgroundOpacity": 0,
 "itemPaddingBottom": 3,
 "itemLabelFontSize": 14,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinWidth": 50,
 "paddingRight": 70,
 "playList": "this.ThumbnailGrid_DE0C33F3_C711_5AF2_4193_50216F2D5904_playlist",
 "itemWidth": 220,
 "backgroundOpacity": 0.05,
 "itemThumbnailHeight": 125,
 "scrollBarMargin": 2,
 "itemBorderRadius": 0,
 "itemHeight": 156,
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "normal",
 "itemLabelHorizontalAlign": "center",
 "minHeight": 1,
 "itemPaddingLeft": 3,
 "borderRadius": 5,
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "paddingTop": 10,
 "minWidth": 1,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "gap": 26,
 "itemPaddingTop": 3
},
{
 "scrollEnabled": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "WebFrame_DAD032BF_D5B0_260A_41C4_11A687733455",
 "width": "100%",
 "backgroundOpacity": 1,
 "url": "//www.youtube.com/embed/Q3MOq68HDLE",
 "class": "WebFrame",
 "minHeight": 1,
 "paddingLeft": 0,
 "insetBorder": false,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "WebFrame48191"
 },
 "paddingRight": 0
},
{
 "iconURL": "skin/IconButton_DAD052BF_D5B0_260A_41C4_D1A1EF648C98.jpg",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_DAD052BF_D5B0_260A_41C4_D1A1EF648C98",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_DAD052BF_D5B0_260A_41C4_D1A1EF648C98_pressed.jpg",
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_DAD042BF_D5B0_260A_41DE_03705AB8CE8A, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_DAD052BF_D5B0_260A_41C4_D1A1EF648C98_rollover.jpg",
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "cursor": "hand"
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 20,
 "children": [
  "this.Image_D6CC9C83_C6F7_AD12_41DA_81BEF5EBD666",
  "this.Container_D6B36C83_C6F7_AD12_41C8_148B3214D1D7",
  "this.Label_D74DCAB2_C6F1_750D_41DD_479AE7D947C6"
 ],
 "backgroundColorDirection": "vertical",
 "id": "Container_D6CCAC83_C6F7_AD12_41E0_1286F1193795",
 "left": "0%",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.7,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 20,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- Buttons set"
 },
 "horizontalAlign": "left",
 "paddingRight": 20,
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "HTMLText_DD41C6F2_C73E_BD0D_41E6_9771CF7A8FC8",
 "width": "89.914%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.78vh;font-family:'Bebas Neue Bold';\">Gi\u1edbi thi\u1ec7u v\u1ec1 nh\u00e0 m\u00e1y TLC:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "iconURL": "skin/IconButton_DCBE19BA_C711_5772_41D8_421BA80C3121.jpg",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_DCBE19BA_C711_5772_41D8_421BA80C3121",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_DCBE19BA_C711_5772_41D8_421BA80C3121_pressed.jpg",
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_DCBE79BA_C711_5772_41DD_AF5B15734173, false, 0, this.effect_DBA546AB_C771_DD12_41D0_1C001E2B318B, 'hideEffect', false)",
 "rollOverIconURL": "skin/IconButton_DCBE19BA_C711_5772_41D8_421BA80C3121_rollover.jpg",
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_DCBE19BA_C711_5772_41D8_421BA80C3121_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 1000,
 "id": "Image_DB936A32_C731_D50D_41E7_C47917840882",
 "maxHeight": 600,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "url": "skin/Image_DB936A32_C731_D50D_41E7_C47917840882.png",
 "width": "100%",
 "class": "Image",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "42.36%",
 "propagateClick": false,
 "data": {
  "name": "Image23459"
 },
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "paddingRight": 0
},
{
 "paddingBottom": 20,
 "id": "HTMLText_DD6CFE7D_C732_ADF6_41C7_BB3AEB561D13",
 "width": "97.576%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingLeft": 20,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "height": "37.52%",
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Ch\u1eb7ng \u0111\u01b0\u1eddng 10 n\u0103m ph\u00e1t tri\u1ec3n trao \u00e1nh s\u00e1ng cho h\u00e0ng tri\u1ec7u gia \u0111\u00ecnh Vi\u1ec7t c\u1ee7a TLC Vi\u1ec7t Nam \u0111\u00e3 \u0111\u1ea1t m\u1ed1c \u0111\u1ea7u ti\u00ean. \u0110\u00e2y l\u00e0 ti\u1ec1n \u0111\u1ec1 v\u00e0 b\u1ec7 ph\u00f3ng v\u1eefng v\u00e0ng cho s\u1ef1 ph\u00e1t tri\u1ec3n v\u01b0\u01a1n xa trong t\u01b0\u01a1ng lai t\u1ea1i th\u1ecb tr\u01b0\u1eddng trong n\u01b0\u1edbc c\u0169ng nh\u01b0 v\u01b0\u01a1n t\u1ea7m qu\u1ed1c t\u1ebf. \u0110\u1ec3 vi\u1ebft n\u00ean nh\u1eefng d\u1ea5u son \u0111\u1ea7y t\u1ef1 h\u00e0o \u0111\u00f3, l\u00e0 qu\u00e1 tr\u00ecnh c\u1ea7n m\u1eabn lao \u0111\u1ed9ng kh\u00f4ng ng\u1eebng c\u1ee7a m\u1ed9t t\u1eadp th\u1ec3 \u0111o\u00e0n k\u1ebft m\u1eabn c\u00e1n. H\u00e3y c\u00f9ng ch\u00fang t\u00f4i nh\u00ecn l\u1ea1i, l\u1ecbch s\u1eed ph\u00e1t tri\u1ec3n c\u1ee7a t\u1eadp \u0111o\u00e0n v\u00e0 nh\u1eefng th\u00e0nh t\u00edch m\u00e0 \u0111\u1ed9i ng\u0169 \u0111\u00e3 \u0111\u1ea1t \u0111\u01b0\u1ee3c trong 10 n\u0103m qua.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Con thuy\u1ec1n TLC Vi\u1ec7t Nam \u0111\u00e3 \u0111i qua ch\u1eb7ng \u0111\u1ea7u ti\u00ean c\u1ee7a kh\u00e1t v\u1ecdng v\u00e0 \u0111am m\u00ea, 10 n\u0103m v\u1edbi nh\u1eefng d\u1ea5u son \u0111\u1ea7y t\u1ef1 h\u00e0o \u0111\u1ec3 ch\u1ee9ng minh n\u0103ng l\u1ef1c v\u00e0 v\u1ecb th\u1ebf ti\u00ean phong. Ch\u1eb7ng \u0111\u01b0\u1eddng 5 n\u0103m, 10 n\u0103m v\u00e0 xa h\u01a1n n\u1eefa, TLC Vi\u1ec7t Nam s\u1ebd ti\u1ebfp t\u1ee5c l\u00e0 m\u1ed9t th\u01b0\u01a1ng hi\u1ec7u \u0111\u00e8n chi\u1ebfu s\u00e1ng, \u0111\u00e8n LED l\u1edbn m\u1ea1nh kh\u00f4ng ch\u1ec9 trong n\u01b0\u1edbc m\u00e0 c\u00f2n v\u01b0\u01a1n xa h\u01a1n ra c\u1ea3 th\u1ecb tr\u01b0\u1eddng qu\u1ed1c t\u1ebf, g\u00f3p ph\u1ea7n ph\u00e1t tri\u1ec3n x\u00e3 h\u1ed9i v\u00e0 \u0111em gi\u00e1 tr\u1ecb s\u1ebb chia t\u1edbi t\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">M\u1ed7i giai \u0111o\u1ea1n ph\u00e1t tri\u1ec3n, t\u1eadp \u0111o\u00e0n TLC Vi\u1ec7t Nam \u0111\u1ec1u c\u00f3 nh\u1eefng tri\u1ebft l\u00fd kinh doanh ph\u00f9 h\u1ee3p. V\u00e0 v\u1edbi d\u1ea5u m\u1ed1c 10 n\u0103m b\u1ee9t ph\u00e1 ti\u1ebfp theo n\u00e0y, TLC Vi\u1ec7t Nam coi tri\u1ebft l\u00fd S\u1ebb Chia l\u00e0 kim ch\u1ec9 nam cho m\u1ecdi ho\u1ea1t \u0111\u1ed9ng, l\u00e0 n\u1ec1n t\u1ea3ng \u0111\u1ec3 c\u00f3 chi\u1ebfn l\u01b0\u1ee3c ph\u00e1t tri\u1ec3n d\u00e0i h\u1ea1n v\u00e0 v\u1eefng m\u1ea1nh. </SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "paddingRight": 20
},
{
 "paddingBottom": 0,
 "id": "HTMLText_D0E56D31_C717_6F0E_41DF_C6A27C960AC5",
 "left": "0%",
 "width": "86.969%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "paddingLeft": 25,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">B\u1ea3n \u0111\u1ed3 khu v\u1ef1c nh\u00e0 m\u00e1y TLC:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "iconURL": "skin/IconButton_D0F9FD32_C717_6F72_41E8_4CCCB23CBB56.jpg",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_D0F9FD32_C717_6F72_41E8_4CCCB23CBB56",
 "maxHeight": 60,
 "verticalAlign": "top",
 "right": 20,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_D0F9FD32_C717_6F72_41E8_4CCCB23CBB56_pressed.jpg",
 "width": "100%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_DF54F305_C712_BB17_41BB_4B3D501DEA86, false, 0, this.effect_D94881C6_C76E_B712_41E1_EC19BC683172, 'hideEffect', false)",
 "rollOverIconURL": "skin/IconButton_D0F9FD32_C717_6F72_41E8_4CCCB23CBB56_rollover.jpg",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_D0F9FD32_C717_6F72_41E8_4CCCB23CBB56_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "HTMLText_D0128D72_C712_AFF2_41E2_4E23FA032E84",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.5vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "iconURL": "skin/IconButton_D0129D72_C712_AFF2_41E8_B4A330439B14.jpg",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_D0129D72_C712_AFF2_41E8_B4A330439B14",
 "maxHeight": 60,
 "verticalAlign": "top",
 "right": 20,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_D0129D72_C712_AFF2_41E8_B4A330439B14_pressed.jpg",
 "width": "100%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_D0122D72_C712_AFF2_418D_3B7B68D86106, false, 0, this.effect_DC0ED36D_C776_FB16_41E8_7C0286E699F9, 'hideEffect', false)",
 "rollOverIconURL": "skin/IconButton_D0129D72_C712_AFF2_41E8_B4A330439B14_rollover.jpg",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_D0129D72_C712_AFF2_41E8_B4A330439B14_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "HTMLText_DE0CD3F3_C711_5AF2_41BC_7AF0497620CF",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.5vh;font-family:'Bebas Neue Bold';\">Danh s\u00e1ch c\u00e1c khu v\u1ef1c:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingRight": 0
},
{
 "iconURL": "skin/IconButton_DE0C23F3_C711_5AF2_41E8_C95AE05970BB.jpg",
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_DE0C23F3_C711_5AF2_41E8_C95AE05970BB",
 "maxHeight": 60,
 "verticalAlign": "top",
 "right": 20,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_DE0C23F3_C711_5AF2_41E8_C95AE05970BB_pressed.jpg",
 "width": "100%",
 "class": "IconButton",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 50,
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_DE0C03F3_C711_5AF2_41E0_7E054AD2CD43, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_DE0C23F3_C711_5AF2_41E8_C95AE05970BB_rollover.jpg",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "paddingRight": 0,
 "transparencyActive": false,
 "pressedRollOverIconURL": "skin/IconButton_DE0C23F3_C711_5AF2_41E8_C95AE05970BB_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 1095,
 "id": "Image_D6CC9C83_C6F7_AD12_41DA_81BEF5EBD666",
 "left": "0%",
 "maxHeight": 1095,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "url": "skin/Image_D6CC9C83_C6F7_AD12_41DA_81BEF5EBD666.png",
 "width": "100%",
 "class": "Image",
 "minHeight": 30,
 "paddingLeft": 0,
 "top": "0%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 40,
 "height": "25.041%",
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 },
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "paddingRight": 0
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "children": [
  "this.Container_D6B35C83_C6F7_AD12_41DF_12E0C2333D98",
  "this.Button_D6B34C83_C6F7_AD12_41C7_97B7334E9E98",
  "this.Container_D6B32C83_C6F7_AD12_41D3_A87FE3E4AD7E",
  "this.Button_D7274958_C6F7_773E_41DA_B00B8BFCC1D6",
  "this.Container_D6B3FC83_C6F7_AD12_41DE_75A21C3402AE",
  "this.Button_D71240C1_C6F7_B50E_41E8_799DF8688B06",
  "this.Container_D6CC5C83_C6F7_AD12_41E8_4BABFC190B67",
  "this.Button_D70E40D8_C6F7_B53E_41E4_715F1C110FFA",
  "this.Container_D6CC2C83_C6F7_AD12_41CF_F410E1753C75",
  "this.Button_D5EDFC76_C6F7_ADF2_41DB_02429F73067B",
  "this.Container_D6CCEC83_C6F7_AD12_41D4_30371CB1C569",
  "this.Button_D28AAC51_C6F7_6D0E_41E1_2A9D544D89E7",
  "this.Container_D4E51658_C6F6_BD3E_41D2_7DAE50DD7607",
  "this.Button_D4F302D8_C6F7_553D_41D6_80FEA6324339",
  "this.Container_D4E39CF5_C6F1_6EF6_41E8_5EA2EB2177A8",
  "this.Button_D23E1629_C6F7_5D1F_41AB_6DFFB2772A77",
  "this.Container_D3D605E6_C6F1_5F12_41E3_BAA6BDCD8F53",
  "this.Button_D53D9978_C6F7_57FE_41D8_F93C6B387120",
  "this.Container_D246ECD9_C6F1_AD3F_41E1_2CA48BEBFC81"
 ],
 "id": "Container_D6B36C83_C6F7_AD12_41C8_148B3214D1D7",
 "left": "0%",
 "layout": "vertical",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "26%",
 "overflow": "scroll",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "propagateClick": true,
 "contentOpaque": false,
 "data": {
  "name": "-Level 1"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "paddingBottom": 0,
 "id": "Label_D74DCAB2_C6F1_750D_41DD_479AE7D947C6",
 "left": "25.79%",
 "verticalAlign": "middle",
 "right": "0%",
 "backgroundOpacity": 0,
 "class": "Label",
 "text": "Created by Dvat.com.vn",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "12.6%",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "4.631%",
 "fontSize": "2vmin",
 "fontStyle": "italic",
 "propagateClick": false,
 "fontColor": "#CCCCCC",
 "data": {
  "name": "Label4645"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "fontWeight": "bold"
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6B35C83_C6F7_AD12_41DF_12E0C2333D98",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D6B34C83_C6F7_AD12_41C7_97B7334E9E98",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "To\u00e0n c\u1ea3nh",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6B32C83_C6F7_AD12_41D3_A87FE3E4AD7E",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D7274958_C6F7_773E_41DA_B00B8BFCC1D6",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "\u0110\u1ea1i s\u1ea3nh",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6B3FC83_C6F7_AD12_41DE_75A21C3402AE",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D71240C1_C6F7_B50E_41E8_799DF8688B06",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Khu v\u1ef1c l\u1ec5 t\u00e2n",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6CC5C83_C6F7_AD12_41E8_4BABFC190B67",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D70E40D8_C6F7_B53E_41E4_715F1C110FFA",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Ph\u00f2ng l\u00e3o h\u00f3a",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6CC2C83_C6F7_AD12_41CF_F410E1753C75",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D5EDFC76_C6F7_ADF2_41DB_02429F73067B",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Khu v\u1ef1c v\u0103n ph\u00f2ng",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D6CCEC83_C6F7_AD12_41D4_30371CB1C569",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D28AAC51_C6F7_6D0E_41E1_2A9D544D89E7",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Khu s\u1ea3n xu\u1ea5t",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D4E51658_C6F6_BD3E_41D2_7DAE50DD7607",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D4F302D8_C6F7_553D_41D6_80FEA6324339",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Kho l\u01b0u tr\u1eef",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D4E39CF5_C6F1_6EF6_41E8_5EA2EB2177A8",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D23E1629_C6F7_5D1F_41AB_6DFFB2772A77",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Ph\u00f2ng t\u1ed1i",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D3D605E6_C6F1_5F12_41E3_BAA6BDCD8F53",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "id": "Button_D53D9978_C6F7_57FE_41D8_F93C6B387120",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "layout": "horizontal",
 "class": "Button",
 "shadowBlurRadius": 6,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingLeft": 10,
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 50,
 "fontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "propagateClick": true,
 "fontColor": "#FFFFFF",
 "label": "Ph\u00f2ng g\u1eafn ch\u00edp",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "ButtD\u0110on Tour Info"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0.8
},
{
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "Container_D246ECD9_C6F1_AD3F_41E1_2CA48BEBFC81",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10
}],
 "scrollBarMargin": 2,
 "class": "Player",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "overflow": "visible",
 "minHeight": 20,
 "paddingLeft": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "buttonToggleFullscreen": "this.IconButton_D9E42DE8_C71E_AF1E_41E3_6F1F3FC3A4C3",
 "height": "100%",
 "propagateClick": false,
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "scripts": {
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "data": {
  "name": "Player683"
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
