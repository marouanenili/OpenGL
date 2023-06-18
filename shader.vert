#version 330 core

// Variable d'entrée, ici la position
layout (location = 0) in vec3 position;
uniform vec4 translation;
//Un Vertex Shader minimaliste
void main (void)
{
  vec4 p=vec4(position, 1.0)+translation;

  gl_Position = p;

}