#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif
varying vec4 vertColor;
varying vec3 cameraDirection;
varying vec3 lightDirectionReflected;

varying vec3 normalInterp;
varying vec3 vertPos;

uniform vec4 lightPosition;

// variable processing

uniform int mode;
uniform float ambientIntensity;
uniform float diffuseIntesity;
uniform float specularIntensity;

void main() {

    vec3 N = normalize(normalInterp);
    vec3 L = normalize(lightPosition.xyz - vertPos);

    // Lambert cosine law
    float diffuse= max(dot(N,L), 0.0);
    float specular = 0.0;
    if(diffuse > 0.0) {
        vec3 R = reflect(-L, N);
        vec3 V = normalize(-vertPos);

        float specAngle = max(dot(R,V), 0.0);
        specular = pow(specAngle, 80.0);
    }
	
	// Combinated Ambient, diffuse , specular
    gl_FragColor = vec4(ambientIntensity * vec3(0.8, 0.0, 0.0) + diffuseIntesity * diffuse * vec3(0.2, 0.8, 0.0) + specularIntensity * specular * vec3(1.0, 1.0, 1.0), 1.0);

    // Only ambient
    if(mode == 0) gl_FragColor = vec4(ambientIntensity * vec3(0.8, 0.0, 0.0), 1.0);

    // With Diffuse
    if(mode == 1) gl_FragColor = vec4(ambientIntensity * vec3(0.8, 0.0, 0.0) + diffuseIntesity * diffuse * vec3(0.2, 0.8, 0.0), 1.0);

}