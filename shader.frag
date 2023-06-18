#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
//Un Fragment Shader minimaliste
void main (void)
{
//Couleur du fragment
float x=gl_FragCoord.x/800.0 - 0.5;
float y=gl_FragCoord.y/800.0 - 0.5;
if(x*x + y*y > 0.2*0.2)
color = vec4(0.0,1.0,0.0,1.0);
else
color = vec4(1.0,0.0,0.0,1.0);
}



