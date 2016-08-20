export function GetTerrainFragmentShader () {
	return `
varying vec4 worldPosition;

#include <meshlambert_premain_fragment>
#include <simplexnoise>

float sigmoid(float x) {
	return x / (1.0 + abs(x));
}

varying vec3 vertexColor;

vec3 getColorAtHeight(float e) {
	if (e < 0.1) return vec3(0.96, 0.88, 0.78); // under water
	else if (e < 0.2) return vec3(0.93, 0.78, 0.68); // beach
	else if (e < 0.3) return vec3(0.13, 0.55, 0.13); // forest
	else if (e < 0.5) return vec3(0.16, 0.67, 0.53); // jungle
	else if (e < 0.7) return vec3(0.9725, 0.7804, 0.092); // savannah
	else if (e < 0.9) return vec3(0.92, 0.79, 0.69); // desert
	else return vec3(1.0, 0.98, 0.98); // snow

}

void main() {
	#include <meshlambert_main1_fragment>

	diffuseColor.rgb *= getColorAtHeight(worldPosition.y / 300.0);
	#include <meshlambert_main2_fragment>
}`
}