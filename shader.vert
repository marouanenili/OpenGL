#version 330 core

// Variable d'entrée, ici la position
layout (location = 0) in vec3 position;
uniform vec4 translation;
uniform mat4 rotation;
uniform mat4 projection;
//Un Vertex Shader minimaliste
void main (void)
{
  vec4 p= rotation*vec4(position, 1.0)+translation;
  p = projection*p;

  gl_Position = p;

}