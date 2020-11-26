#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform mat4 modelview;
uniform mat4 transform;
uniform mat3 normalMatrix;
uniform vec4 lightPosition;

//variable processing
uniform int mode;
uniform float ambientIntensity;
uniform float diffuseIntesity;
uniform float specularIntensity;


varying vec3 normalInterp;
varying vec3 vertPos;



attribute vec4 position;
attribute vec4 color;
attribute vec3 normal;

varying vec4 vertColor;

void main() {

    vec4 vertPos4 = modelview * position;
    vertPos = vec3(vertPos4) / vertPos4.w;
    normalInterp = vec3(normalMatrix * normal);
    gl_Position = transform * position; 

	// ecNormal
    vec3 N = normalize(normalInterp);
	
	//Light direction
    vec3 L = normalize(lightPosition.xyz - vertPos);

    float diffuse = max(dot(N,L), 0.0);
    float specular = 0.0;

    if(diffuse > 0.0) {
        vec3 R = reflect(-L, N);
        vec3 V = normalize(-vertPos);

        //intensidad
		float specAngle = max(dot(R,V), 0.0);
        specular = pow(specAngle, 80.0);
    }
	
	
	// combinated ambient, specular, diffuse
	vertColor = vec4(ambientIntensity  * vec3(0.8, 0.0, 0.0) + diffuseIntesity * diffuse * vec3(0.2, 0.8, 0.0) + specularIntensity * specular , 1.0);
        

	// Only ambient
    if(mode == 0) vertColor = vec4(ambientIntensity  * vec3(0.8, 0.0, 0.0) , 1.0);

    // With Diffuse
    if(mode == 1)vertColor = vec4(ambientIntensity  * vec3(0.8, 0.0, 0.0) + diffuseIntesity * diffuse * vec3(0.2, 0.8, 0.0) , 1.0);
}