uniform float uTime;
uniform float uSize;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;

void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Rotation
    float angle = atan(modelPosition.y, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
    angle += angleOffset;
    
    float x = cos(angle) * distanceToCenter;
    float z = sin(angle) * distanceToCenter;
    
    modelPosition.x = x;
    modelPosition.z = z;
    
    // Randomness
    modelPosition.xyz += aRandomness;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    
    vec4 projectionPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectionPosition;

    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / - viewPosition.z);
    
    vColor = color;
}