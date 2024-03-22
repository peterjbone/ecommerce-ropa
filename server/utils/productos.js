//? Aquí estan "todos los productos" hasta el momento
//? hay 6 productos
//? Esto sirve para insertarlo en la base de datos "thecloset" en la colección "productos"

const productos = [
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
	},
	{
		nombre: "adidas Originals Gazelle Bold",
		marca: "adidas",
		descripcion:
			"Trae la nostalgia con las icónicas adidas Originals Gazelle Bold. Confeccionadas con una parte superior de gamuza suave y mantecosa, estas siluetas clásicas brindan una sensación duradera y un ajuste cómodo que dura mucho tiempo. El forro sintético ofrece una calidez superior, mientras que la altura apilada de tres capas proporciona una nueva perspectiva del estilo clásico. Acabado con una 'Gazelle' dorada metálica y las icónicas 3 rayas dentadas, el adidas Originals Gazelle Bold llama la atención sin importar a dónde los lleves.",
		precio: 120.0,
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
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
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
					"https://images.footlocker.com/is/image/EBFL2/IE0420_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IE0420_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IE0420_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					"https://images.footlocker.com/is/image/EBFL2/IE0421_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IE0421_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IE0421_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "New Balance 327",
		marca: "new-balance",
		descripcion:
			"Diseñadas para ofrecer el máximo impacto, las New Balance 327 cuentan con una plantilla de corcho natural y una suela de goma sin teñir. Con un logotipo N llamativo, le da a tu conjunto un toque deportivo.",
		precio: 100.0,
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
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
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
					"https://images.footlocker.com/is/image/EBFL2/WS327LS_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/WS327LS_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/WS327LS_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/WS327LS_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/WS327BL_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/WS327BL_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/WS327BL_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/WS327BL_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Vapormax Plus",
		marca: "nike",
		descripcion:
			"¡Donde cada paso se siente como una escapada junto al mar! Llevando la vida de playa a la ciudad, el Nike Air Vapormax Plus te permite entrar al paraíso con facilidad. Haciendo un guiño al original del 98 con una jaula flotante y una parte superior acolchada, estos zapatos clásicos te permiten subirte a una ola de comodidad y estilo legendarios. El arco prominente se inspira en la cola de una ballena y añade estructura. Además, la revolucionaria tecnología VaporMax Air te brinda una sensación similar a la de una nube, ayudándote a recorrer cualquier sendero con la máxima amortiguación. Directamente desde los archivos hacia el futuro, el Nike Air Vapormax Plus te permite navegar por la moda con confianza.",
		precio: 210.0,
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
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
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
					"https://images.footlocker.com/is/image/EBFL2/F3614686_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F3614686_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F3614686_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F3614686_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					"https://images.footlocker.com/is/image/EBFL2/Q8878661_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q8878661_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q8878661_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q8878661_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Force 1 '07",
		marca: "nike",
		descripcion:
			"Una verdadera realeza de las zapatillas. El Nike Air Force 1 '07 está de regreso con cuero nítido, colores llamativos y líneas de corte clásicas de Nike. La parte superior viene con superposiciones de cuero cosidas que se mantienen fieles a su predecesor y brindan soporte confiable. La entresuela de espuma ofrece la cantidad perfecta de amortiguación, mientras que las perforaciones en la puntera mejoran el flujo de aire. Celebre su amor por todo lo relacionado con Nike y el B-ball con las Nike Air Force 1 '07.",
		precio: 115.0,
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
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
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
					"https://images.footlocker.com/is/image/EBFL2/D8959600_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D8959600_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D8959600_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#EFBC9B"],
					nombres: ["beige"]
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
					"https://images.footlocker.com/is/image/EBFL2/Q7583001_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q7583001_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q7583001_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q7583001_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air VaporMax Flyknit 2021",
		marca: "nike",
		descripcion:
			"¡La herencia del running de alto rendimiento se vuelve ecológica! Confeccionadas con al menos un 40 % de material reciclado en peso, las Nike Air VaporMax Flyknit 2021 son aireadas y fáciles de usar. Diseñado originalmente para correr, este Nike Air cuenta con un FlyKnit reciclado súper elástico, un cuello suave y sin costuras que esculpe el tobillo y la primera unidad Air de una sola pieza que recorre todo el largo del calzado.La parte superior FlyKnit está hecha de hilo reciclado postindustrial y ofrece una sensación ligera, sin costuras y transpirable, mientras que el clip de TPU reciclado en el talón añade un estilo tradicional a la zapatilla. Su construcción clásica y moderna es evidente en el sistema de cordones tradicional realzado por los modernos ojales de cincha.",
		precio: 149.99,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/C4112002_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/C4112002_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/C4112002_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/C4112002_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#808080"],
					nombres: ["gris"]
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
					"https://images.footlocker.com/is/image/EBFL2/D4112100_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D4112100_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D4112100_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D4112100_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Presto",
		marca: "nike",
		descripcion:
			"¿Es de extrañar que las Nike Air Presto sean pura magia? Lanzado en el año 2000, este zapato elegante y con estilo tiene en mente la comodidad y es evidente en la forma en que se calza con la facilidad de tu pijama favorito. El Air Presto, que satisface las demandas de los atletas más exigentes, está diseñado para adaptarse a su pie en lugar de restringir el movimiento. El producto innovador es sorprendentemente versátil en su comodidad para todas las estaciones: ofrece suficiente apoyo para mantener los pies cómodos en invierno y lo suficientemente transpirable para refrescarse en verano.",
		precio: 79.99,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/O1163001_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/O1163001_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/O1163001_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/O1163001_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
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
					"https://images.footlocker.com/is/image/EBFL2/78068100_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/78068100_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/78068100_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/78068100_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Dunk High",
		marca: "nike",
		descripcion:
			"Lo retro siempre está de moda. Prueba: las Nike Dunk High. Nacido para la cancha y llevado a las calles, este ícono del B-ball de los 80 está aquí, remasterizado y listo para afirmar su dominio callejero en cuero crujiente y colores retro nostálgicos. Inspirada en el baloncesto de la vieja escuela, la elegante parte superior te brinda un flashback instantáneo de los 80 y te permite retroceder en el tiempo con un estilo atrevido. El cuello alto, la forma de la lengüeta y las perforaciones en la puntera realzan el encanto vintage.Con casi 40 años, es seguro decir que estos viejos favoritos lucen fantásticos para su edad, y la nueva combinación de colores hace que el trato sea mucho más dulce. Entonces, si eres un amante de las zapatillas altas, las Nike Dunk High son tu nuevo (o antiguo) estilo flexible.",
		precio: 130.0,
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
					codigosHex: ["#ffff00", "#000000"],
					nombres: ["amarillo", "negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/N4216001_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N4216001_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N4216001_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Zoom G.T. Cut 2.0",
		marca: "nike",
		descripcion:
			"Un corte por encima del resto. Diseñado a la perfección para los jugadores que se niegan a conformarse con nada menos que la grandeza, el Nike Air Zoom G.T. Cut 2.0 te mantiene activo (y activo) en la cancha hasta el último cubo. Con una combinación letal de un patrón de tracción avanzado y un patrón de espiga hueca, estas siluetas te ayudan a arrancar, detenerte o cambiar de dirección en un instante. La tecnología Nike React combinada con una unidad Zoom Air en la capa inferior de la parte superior y una unidad Zoom Air en el talón brinda una capacidad de respuesta como nunca antes habías sentido. Ven con tu equipo y consigue el balón ganador con las Nike Air Zoom G.T. Corte 2.0.",
		precio: 170.0,
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
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
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
					"https://images.footlocker.com/is/image/EBFL2/N5938601_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N5938601_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N5938601_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N5938601_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Dunk Low Twist",
		marca: "nike",
		descripcion:
			"¿Qué significa ser el mejor? Bueno, cuando se trata de moda urbana, se trata de ponerse las Nike Dunk Low. Estas zapatillas, que se sumergen profundamente en los archivos callejeros de los años 80, ofrecen una apariencia poco común que está arraigada en la herencia de Nike. El cuero en la parte superior se suma a la estética vintage, mientras que la entresuela de espuma brinda la comodidad que amas de Nike. Si eso no es suficiente, el diseño extra hinchado te da una ventaja con estilo y sustancia. No más medias tintas, es hora de ser el mejor con las Nike Dunk Low.",
		precio: 125.0,
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
					codigosHex: ["#ffffff", "#000000"],
					nombres: ["blanco", "negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/Z2794001_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z2794001_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z2794001_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z2794001_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ECB159"],
					nombres: ["cafe"]
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
					"https://images.footlocker.com/is/image/EBFL2/X3374700_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X3374700_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X3374700_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X3374700_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Air Max Solo",
		marca: "nike",
		descripcion:
			"Conoce al líder del grupo: el Nike Air Max Solo. Nike Air Max, que apareció en escena en 1987, fue el primero en presentar Air al mundo. La talonera de estas siluetas está inspirada en las Air Max 90 y agrega un estilo vintage a tu colección de zapatillas, mientras que las Air Max 180 influyen en la unidad Max Air texturizada que te mantiene cómodo y apoyado durante toda la distancia. Con una interpretación moderna de elementos clásicos, el Nike Air Max Solo te permite maximizar tu estilo.",
		precio: 100.0,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/N0784004_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N0784004_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N0784004_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N0784004_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
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
					"https://images.footlocker.com/is/image/EBFL2/N0784003_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N0784003_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N0784003_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N0784003_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Sabrina 1",
		marca: "nike",
		descripcion:
			"¡Libera tu Sabrina interior! Presentamos Nike Sabrina 1: el calzado definitivo para esa persona decidida y única sin disculpas. Diseñadas en colaboración con el fenómeno del baloncesto Sabrina Ionescu, estas zapatillas están diseñadas para brindar velocidad, comodidad y soporte en la cancha. Con una unidad Air Zoom de carga superior combinada con un núcleo de espuma React de longitud completa, estos entrenadores te brindan el equilibrio ideal entre estabilidad, control del suelo y amortiguación para esos juegos de velocidad turbo.Estas zapatillas te permiten experimentar la atracción magnética de Sabrina para animar a los demás, tanto dentro como fuera de la cancha, con un diseño inspirado en la mentalidad de su equipo y comunidad. El punto encima de su firma y la 'I' invertida en un signo de exclamación en el talón rinden homenaje a sus raíces y celebran el viaje que les espera. Salta al modo acción y prepárate para dejar tu huella en el juego con Nike Sabrina 1.",
		precio: 130.0,
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
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
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
					"https://images.footlocker.com/is/image/EBFL2/Q3381103_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q3381103_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q3381103_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q3381103_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#FF71CD", "#FB6D48"],
					nombres: ["rosado", "naranja"]
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
					"https://images.footlocker.com/is/image/EBFL2/Q3381600_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q3381600_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q3381600_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q3381600_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Huarache",
		marca: "nike",
		descripcion:
			"¡Aprovecha el poder de Huarache! Diseñado para el rendimiento, el Nike Huarache ofrece un retorno de energía explosivo y una amortiguación propulsora para que puedas llegar hasta la línea de meta. Celebrados tanto en las calles como en las pistas, estos corredores están equipados con amortiguación Nike Air para la zancada más ligera jamás vista. La parte superior combina cuero suave y una tela similar al neopreno para brindar comodidad suprema, mientras que la suela de goma genera confianza en cada paso.Adornado con el emblemático emblema Huarache en la lengüeta, el Nike Huarache hace que el deporte deportivo luzca fresco, moderno y atrevido.",
		precio: 199.0,
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
					codigosHex: ["#FB6D48"],
					nombres: ["naranja"]
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
					"https://images.footlocker.com/is/image/EBFL2/X2674100_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X2674100_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X2674100_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Tiro 23 WM Jacket",
		marca: "adidas",
		descripcion:
			"Resalta tu estilo Tiro con la chaqueta adidas Tiro 23 WM. Confeccionada con tejido 100 % reciclado, esta chaqueta añade un toque de moda sostenible y comodidad a tu rotación athleisure. Resume tu conjunto deportivo con la chaqueta adidas Tiro 23 WM.",
		precio: 39.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "chaquetas",
		opciones: [
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
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
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
					"https://images.footlocker.com/is/image/EBFL2/IT7111_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IT7111_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IT7111_om3?wid=565&hei=565&fmt=png-alpha"
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
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
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
					"https://images.footlocker.com/is/image/EBFL2/IA1745_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IA1745_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IA1745_om3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Gameday Full-Zip Hoodie",
		marca: "adidas",
		descripcion:
			"Mejora tu look deportivo con la sudadera con capucha adidas Gameday Full-Zip. Fabricada con contenido reciclado y renovable, esta sudadera con capucha es una incorporación sostenible a tu colección informal. 67% algodón/33% poliéster reciclado. Importado.",
		precio: 49.99,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
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
					"https://images.footlocker.com/is/image/EBFL2/IC8044_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IC8044_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IC8044_om3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IC8044_om4?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IC8044_om5?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#EFBC9B"],
					nombres: ["beige"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
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
					"https://images.footlocker.com/is/image/EBFL2/IC804_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IC804_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IC804_a1?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Days Of Summer T-Shirt",
		marca: "adidas",
		descripcion:
			"El verano está aquí. Es hora de sentarse y relajarse con la camiseta adidas Days Of Summer. Confeccionada con Better Cotton procedente de agricultura sostenible, esta camiseta es cómoda de llevar, súper suave para la piel y respetuosa con el planeta. Las mangas cortas y el ajuste holgado mantienen la camiseta cómoda y cómoda para moverse y relajarse. Ponte la camiseta adidas Days Of Summer para combatir el calor y tomar el sol.",
		precio: 24.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas",
		opciones: [
			{
				colores: {
					codigosHex: ["#ECB159"],
					nombres: ["cafe"]
				},
				tallas: [
					{
						talla: "S",
						stock: 20
					},
					{
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
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
					"https://images.footlocker.com/is/image/EBFL2/IR8366_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IR8366_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IR8366_om3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IR8366_om4?wid=565&hei=565&fmt=png-alpha"
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
						talla: "M",
						stock: 20
					},
					{
						talla: "L",
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
					"https://images.footlocker.com/is/image/EBFL2/IR8363_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IR8363_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IR8363_om3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IR8363_om4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	}
];

module.exports = productos;
