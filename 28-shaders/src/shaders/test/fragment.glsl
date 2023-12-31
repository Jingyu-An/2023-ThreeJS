uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;
varying float vRandom;
varying float vBrightness;

void main()
{
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation * 2.0 + vBrightness;
    gl_FragColor = textureColor;
//     gl_FragColor = vec4(vUv, 1.0, 1.0);
}