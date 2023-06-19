#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;
out float r ;
out float g ;
out float b;
in vec3 vcouleur;

//Un Fragment Shader minimaliste
//Un Fragment Shader minimaliste
void main (void)
{
//Couleur du fragment
float x=gl_FragCoord.x/800.0 - 0.5;
float y=gl_FragCoord.y/800.0 - 0.5;

color = vec4(1,0,0,1.0);
}



