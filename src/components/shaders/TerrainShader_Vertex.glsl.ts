export function GetTerrainVertexShader() {
	return `
#include <meshlambert_premain_vertex>

varying vec3 vertexColor;
varying vec2 vUv;
varying vec4 worldPosition;

void main() {
	vertexColor = vec3(255, 100, 0);
	vUv = uv;
	worldPosition = modelMatrix * vec4( position, 1.0 );

	#include <meshlambert_main_vertex>
}`
}