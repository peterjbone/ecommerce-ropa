//? Aquí estan "todos los productos" hasta el momento
//? hay 6 productos
//? Esto sirve para insertarlo en la base de datos "thecloset" en la colección "productos"

const productos = [
	{
		nombre: "Nike Tech Fleece Full-Zip WR Hoodie",
		marca: "nike",
		descripcion:
			"Prepárate para disfrutar de una calidez y comodidad superiores con estilo con la sudadera con capucha Nike Tech Fleece Full-Zip WR. Confeccionada con una mezcla de tejidos suaves y ligeros, esta sudadera con capucha te mantiene calentito y relajado todo el día. Aprovecha al máximo los días fríos con la sudadera con capucha Nike Tech Fleece Full-Zip WR.",
		precio: 145.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "hoodies",
		opciones: [
			{
				colores: {
					codigosHex: ["#ffffff", "#000000", "#ff0000"],
					nombres: ["blanco", "negro", "rojo"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/Z4709100_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z4709100_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#00ff00", "#000000"],
					nombres: ["verde", "negro"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/F4432349_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F4432349_02?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#808080", "#000000"],
					nombres: ["gris", "negro"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/F7921013_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F7921013_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F7921013_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F7921013_04?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan Essential Fleece Baseline Hoodie",
		marca: "jordan",
		descripcion:
			"¡Aprovecha el día con forro polar! Los vientos fríos no pueden tocarte cuando estás abrigado con la sudadera con capucha Jordan Essential Fleece Baseline. Una suave capa de tejido polar te mantiene abrigado y calentito, mientras que los bolsillos delanteros ofrecen espacio para esconder las manos y guardar lo esencial. Enfréntate a los escalofríos con la sudadera con capucha Jordan Essential Fleece Baseline.",
		precio: 78.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "hoodies",
		opciones: [
			{
				colores: {
					codigosHex: ["#0000ff"],
					nombres: ["azul"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/D7545480_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D7545480_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/D7545011_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D7545011_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ddbea9"],
					nombres: ["bronceado"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/D7545200_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D7545200_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Tech Fleece Full-Zip Hoodie",
		marca: "nike",
		descripcion:
			"Ciérralo y boom, ¡estás listo para rockear! Pasa el día sin enfrentarte a barricadas con la sudadera con capucha resistente al agua Nike Tech Fleece Full-Zip. Diseñada con un material resistente al agua, esta sudadera con capucha te protege de la humedad y la niebla, manteniéndote cómodo todo el tiempo. Supera las probabilidades y navega durante el día con estilo con la sudadera con capucha Nike Tech Fleece resistente al agua con cremallera completa.",
		precio: 145.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "hoodies",
		opciones: [
			{
				colores: {
					codigosHex: ["#8ecae6"],
					nombres: ["azul-marino"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/B7921473_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B7921473_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ff0000"],
					nombres: ["rojo"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/B7921672_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B7921672_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#FB6D48"],
					nombres: ["naranja"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/B7921893_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B7921893_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Futura T-Shirt",
		marca: "nike",
		descripcion:
			"Obtén una apariencia versátil que agrega un 'aire' de sofisticación a tu estilo general con la camiseta Nike Air Futura. Confeccionada con un tejido ligero y transpirable, esta camiseta te mantiene relajado y recargado desde el amanecer hasta el atardecer. Ya sea una escapada de fin de semana o una noche de atracones en casa de tus amigos, la camiseta Nike Air Futura te respalda para todo lo divertido y casual.",
		precio: 30.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas",
		opciones: [
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/2388006_a1?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#0000ff"],
					nombres: ["azul"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/42388069_a1?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffafcc"],
					nombres: ["rosado"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/42388186_a1?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Statue Unveil T-Shirt",
		marca: "nike",
		descripcion:
			"La camiseta Nike Estatua Unveil es más que una prenda; es un tributo al legado inmortal de Kobe Bryant. Confeccionada con algodón de peso medio, esta camiseta captura momentos increíbles de la ilustre carrera de Kobe con gráficos atrevidos y una caída suave. El número de camiseta '24' en la espalda hace un guiño a la leyenda del B-ball. Asegure su parte de la historia y use el legado de Mamba con la camiseta Nike Estatua Unveil.",
		precio: 40.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas",
		opciones: [
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/Q4038100_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4038100_01?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike NSW Tech Fleece WR Full-Zip Hoodie",
		marca: "nike",
		descripcion:
			"¿Necesitas abrigarte cuando los días se vuelven más fríos, pero las capas voluminosas te frenan? Lo que necesitas es la sudadera con capucha Nike NSW Tech Fleece WR con cremallera completa que se mueve contigo mientras mantiene el frío y el viento fuera. Con un tejido polar ligero y de primera calidad, este cortavientos celebra el décimo aniversario de Nike Tech Fleece que ofrece calidez sin volumen añadido y una sensación de suavidad tanto por dentro como por fuera. La paleta de colores y las texturas inspiradas en minerales naturales, las líneas personalizadas y los detalles elegantes elevan el nivel de la capa cotidiana. Gira la capucha de tres paneles y dos capas para disfrutar de protección adicional contra el frío con la sudadera con capucha Nike NSW Tech Fleece WR con cremallera completa.",
		precio: 145.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "femenino",
		subcategoria: "hoodies",
		opciones: [
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/B8338013_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B8338013_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B8338013_om3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "L",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "XL",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/B8338010_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B8338010_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B8338010_om3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Dunk Low",
		marca: "nike",
		descripcion:
			"Haciendo justicia a su icónico predecesor, el Nike Dunk Low es todo lo que su hijo necesita cuando se trata de un estilo de calzado vanguardista. Con una apariencia más limpia, suela de goma para un agarre superior y acolchado en los tobillos, estas zapatillas ofrecen una estética de diseño moderno como ninguna otra.",
		precio: 100.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "masculino",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#ff0000"],
					nombres: ["rojo"]
				},
				tallas: [
					{
						talla: "3.5",
						stock: 20
					},
					{
						talla: "4.0",
						stock: 20
					},
					{
						talla: "4.5",
						stock: 20
					},
					{
						talla: "5.0",
						stock: 20
					},
					{
						talla: "5.5",
						stock: 20
					},
					{
						talla: "6.0",
						stock: 20
					},
					{
						talla: "6.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/Z3548612_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z3548612_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z3548612_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z3548612_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#00ff00"],
					nombres: ["verde"]
				},
				tallas: [
					{
						talla: "3.5",
						stock: 20
					},
					{
						talla: "4.0",
						stock: 20
					},
					{
						talla: "4.5",
						stock: 20
					},
					{
						talla: "5.0",
						stock: 20
					},
					{
						talla: "5.5",
						stock: 20
					},
					{
						talla: "6.0",
						stock: 20
					},
					{
						talla: "6.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/Z4357300_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z4357300_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z4357300_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z4357300_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Max 270",
		marca: "nike",
		descripcion:
			"El Nike Air Max 270, que hizo su debut el 2 de febrero de 2018, estaba destinado a ser el calzado de estilo de vida más nuevo de Nike. Desde entonces, Nike ha seguido lanzando el Air Max 270 en una interesante gama de colores. Lo que hace que las Nike Air Max 270 sean tan únicas es que cuentan con la unidad Air Max más alta jamás creada. Eso significa que obtendrás la mayor amortiguación bajo los pies cuando uses estas geniales zapatillas.",
		precio: 160.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "femenino",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 20
					},
					{
						talla: "5.5",
						stock: 20
					},
					{
						talla: "6.0",
						stock: 20
					},
					{
						talla: "6.5",
						stock: 20
					},
					{
						talla: "7.0",
						stock: 20
					},
					{
						talla: "7.5",
						stock: 20
					},
					{
						talla: "8.0",
						stock: 20
					},
					{
						talla: "8.5",
						stock: 20
					},
					{
						talla: "9.0",
						stock: 20
					},
					{
						talla: "9.5",
						stock: 20
					},
					{
						talla: "10.0",
						stock: 20
					},
					{
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/H6789100_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/H6789100_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/H6789100_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffff00"],
					nombres: ["amarillo"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 20
					},
					{
						talla: "5.5",
						stock: 20
					},
					{
						talla: "6.0",
						stock: 20
					},
					{
						talla: "6.5",
						stock: 20
					},
					{
						talla: "7.0",
						stock: 20
					},
					{
						talla: "7.5",
						stock: 20
					},
					{
						talla: "8.0",
						stock: 20
					},
					{
						talla: "8.5",
						stock: 20
					},
					{
						talla: "9.0",
						stock: 20
					},
					{
						talla: "9.5",
						stock: 20
					},
					{
						talla: "10.0",
						stock: 20
					},
					{
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/H6789701_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/H6789701_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/H6789701_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Chuck Taylor All Star Lift Ox",
		marca: "converse",
		descripcion:
			"¡Sube, ponte y dale a tu conjunto un toque moderno! Impulsado por un paquete auténtico de suela doble y tonos sólidos, el Converse Chuck Taylor All Star Lift Ox te permite mantenerte en la cima de tu juego de estilo. Construidas con elementos inconfundibles de Chuck Taylor All Star, estas zapatillas de plataforma baja cuentan con rayas en la entresuela en contraste y una puntera de goma probada. La mejor amortiguación OrthoLite de su clase se prepara para una pisada con agarre y una zancada ligera, mientras que las nuevas combinaciones de colores te permiten renovar tu rutina diaria. Diseñadas con una suela de plataforma elevada, las Converse Chuck Taylor All Star Lift Ox te permiten mantenerte erguido y caminar por la cuadra con estilo.",
		precio: 49.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "femenino",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#ff0000"],
					nombres: ["rojo"]
				},
				tallas: [
					{
						talla: "6.0",
						stock: 20
					},
					{
						talla: "6.5",
						stock: 20
					},
					{
						talla: "7.0",
						stock: 20
					},
					{
						talla: "7.5",
						stock: 20
					},
					{
						talla: "8.0",
						stock: 20
					},
					{
						talla: "8.5",
						stock: 20
					},
					{
						talla: "9.0",
						stock: 20
					},
					{
						talla: "9.5",
						stock: 20
					},
					{
						talla: "10.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A06839C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A06839C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A06839C_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A06839C_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffff00"],
					nombres: ["amarillo"]
				},
				tallas: [
					{
						talla: "6.0",
						stock: 20
					},
					{
						talla: "6.5",
						stock: 20
					},
					{
						talla: "7.0",
						stock: 20
					},
					{
						talla: "7.5",
						stock: 20
					},
					{
						talla: "8.0",
						stock: 20
					},
					{
						talla: "8.5",
						stock: 20
					},
					{
						talla: "9.0",
						stock: 20
					},
					{
						talla: "9.5",
						stock: 20
					},
					{
						talla: "10.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A03542C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03542C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03542C_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	}
];

module.exports = productos;
