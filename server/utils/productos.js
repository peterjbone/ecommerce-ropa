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
	},
	{
		nombre: "OFF-WHITE X AIR FORCE 1 LOW 'BLACK'",
		marca: "off-white",
		descripcion:
			"Virgil Abloh lanza un rediseño bastante directo de la silueta de Bruce Kilgore con este OFF-WHITE x Air Force 1 Low. Sin embargo, hay muchos detalles nuevos en la reconstrucción: además de una mezcla de ripstop y gamuza, la parte superior usa costuras selladas y un Swoosh blanco unido mediante costuras en zigzag. En la lengüeta aparecen espuma expuesta y etiquetas colocadas de manera inusual, mientras que el toque posmoderno final llega con la palabra 'LOGO' impresa en la lengüeta del talón.",
		precio: 250.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
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
					"https://cdn.flightclub.com/TEMPLATE/806196/1.jpg?w=640",
					"https://sneakernews.com/wp-content/uploads/2018/10/off-white-nike-air-force-1-low-black-5.jpg",
					"https://sneakernews.com/wp-content/uploads/2018/12/off-white-nike-air-force-1-low-black-ao4606-001-7.jpg"
				]
			}
		]
	},
	{
		nombre: "OFF-WHITE X AIR JORDAN 1 RETRO HIGH OG 'CHICAGO'",
		marca: "off-white",
		descripcion:
			"El OFF-WHITE x Air Jordan 1 fue creado por el diseñador Virgil Abloh en la combinación de colores clásica de Chicago. Algunas de las características a medio terminar de la zapatilla incluyen una cremallera OFF-WHITE en el cuello, un Swoosh vinculado al zapato con costuras azules notables y 'Air' impreso en la entresuela. La caja está deconstruida ya que está volteada hacia adentro y el interior consta de una estructura negra y un logotipo dorado de Jumpman, mientras que el exterior es de cartón simple con las palabras 'Jumpman' impresas. La colección Virgil OFF-WHITE incluía iteraciones remezcladas de Air VaporMax, Air Presto, Air Max 90, Blazer, Air Max 97, Hyperdunk 2017, Air Force 1, Zoom Fly y Chuck Taylor.",
		precio: 300.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
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
					"https://cdn.flightclub.com/TEMPLATE/801781/1.jpg?w=640",
					"https://legitgrails.com/cdn/shop/articles/34406e43cc8d872d32879281cb29b560_1200x1200.jpg?v=1591046157",
					"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Foff-white-air-jordan-1-chicago-resale-prices-skyrocket-virgil-abloh-death-001.jpg?cbr=1&q=90",
					"https://store.yankeekicks.com/cdn/shop/products/off-white-air-jordan-1-the-ten-AA3834-101-4_0e45f5b8-7fa6-4b48-a544-10bca1da5b31.jpg?v=1708276550"
				]
			}
		]
	},
	{
		nombre: "OFF-WHITE X DUNK LOW 'PINE GREEN'",
		marca: "off-white",
		descripcion:
			"Emergiendo con el toque de diseño característico de Virgil Abloh, el OFF-WHITE x Dunk Low 'Pine Green' se lanzó como parte de una colección de tres zapatos. La parte superior aparece en verde pino y blanco en su construcción de cuero, acentuada por una etiqueta de bandera naranja en el lateral y una marca superior en el medio. Un segundo sistema de cordones se superpone al primero, mientras que debajo de los pies, una suela de goma de dos tonos brinda soporte.",
		precio: 250.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#00ff00"],
					nombres: ["verde"]
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
					"https://cdn.flightclub.com/TEMPLATE/152361/1.jpg?w=640",
					"https://www.kicksonfire.com/wp-content/uploads/2019/08/Off-White%E2%84%A2-x-Nike-Dunk-Low-Pine-Green.jpg",
					"https://sneakerbardetroit.com/wp-content/uploads/2019/08/Off-White-x-Nike-Dunk-Low-Pine-Green-CT0856-100-2019-Release-Date-Pricing-3.jpg",
					"https://hypebeast.com/image/2019/12/off-white-nike-dunk-low-official-look-university-gold-pine-green-university-red-10-1.jpg"
				]
			}
		]
	},
	{
		nombre: "OFF-WHITE X AIR MAX 90 'DESERT ORE'",
		marca: "off-white",
		descripcion:
			"El OFF-WHITE x Air Max 90 'Desert Ore' se lanzó como parte de una colaboración entre Nike y Virgil Abloh de Off-White. La parte superior de cuero, nobuck y gamuza del zapato aparece en Desert Ore, con Bright mango y Hyper Jade unidos en la marca Swoosh. Bajo los pies, la entresuela clásica alberga una unidad Air visible en el talón, mientras que una etiqueta colgante azul y un texto impreso en el lado medio añaden toques característicos de Abloh.",
		precio: 300.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "zapatos",
		opciones: [
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
					"https://cdn.flightclub.com/TEMPLATE/806511/1.jpg?w=640",
					"https://www.kicksonfire.com/wp-content/uploads/2018/11/OFF-WHITE-x-Nike-Air-Max-90-Desert-Ore-1-1.jpg",
					"https://sneakernews.com/wp-content/uploads/2019/01/off-white-nike-air-max-90-desert-ore-release-date-5.jpg"
				]
			}
		]
	},
	{
		nombre: "Converse All Star High Top",
		marca: "converse",
		descripcion:
			"Mantente al tanto de tu estilo con estas zapatillas Converse All Star Hi para niña. Siguiendo el modelo de los infames zapatos de Chuck Taylor, estas zapatillas altas brindan el estilo icónico con comodidad moderna.",
		precio: 40.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
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
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					},
					{
						talla: "12.5",
						stock: 20
					},
					{
						talla: "13.0",
						stock: 20
					},
					{
						talla: "13.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/43234_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/43234_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/43234_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/43234_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse UNT1TL3D Hi",
		marca: "converse",
		descripcion:
			"Luce el estilo clásico de Chuck Taylor 'UNT1L3D' de Converse. Con el icónico medallón de Chuck Taylor y los logotipos de Chevron, es una zapatilla que combina con todo y en cualquier lugar.",
		precio: 29.99,
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
					codigosHex: ["#0000ff"],
					nombres: ["azul"]
				},
				tallas: [
					{
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					},
					{
						talla: "12.5",
						stock: 20
					},
					{
						talla: "13.0",
						stock: 20
					},
					{
						talla: "13.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A06013C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A06013C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A06013C_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A06013C_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#00ff00"],
					nombres: ["verde"]
				},
				tallas: [
					{
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					},
					{
						talla: "12.5",
						stock: 20
					},
					{
						talla: "13.0",
						stock: 20
					},
					{
						talla: "13.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A03147F_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03147F_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03147F_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03147F_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Hi Eva Lift",
		marca: "converse",
		descripcion:
			"Eleva los niveles de confianza de tus pequeñas con las Converse Hi Eva Lift. Estos zapatos de plataforma alta ofrecen comodidad acogedora con la parte superior de Sherpa. Con un suave forro polar, estas zapatillas garantizan mayor calidez para que tus hijos pequeños se retuerzan. La suela con patrón de diamantes remata las Converse Hi Eva Lift con un estilo apasionante.",
		precio: 29.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
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
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					},
					{
						talla: "12.5",
						stock: 20
					},
					{
						talla: "13.0",
						stock: 20
					},
					{
						talla: "13.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A6085C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A6085C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A6085C_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A6085C_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse All Star High Top",
		marca: "converse",
		descripcion:
			"Las Converse All Star Hi son unas zapatillas altas para niños inspiradas en las legendarias Chuck Taylor. La parte superior de lona es liviana para brindar comodidad durante todo el día. También es increíblemente duradero, por lo que su hijo puede usar estas modernas zapatillas hasta que se le acaben. Su cierre de cordones tradicional tiene un aspecto clásico e imparte un ajuste ceñido y de apoyo. La puntera de goma mejora el aspecto de estas zapatillas altas y añade protección adicional contra daños. El parche All Star que aparece en el tobillo realza su aspecto icónico.",
		precio: 39.99,
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
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					},
					{
						talla: "12.5",
						stock: 20
					},
					{
						talla: "13.0",
						stock: 20
					},
					{
						talla: "13.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A03605F_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03605F_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03605F_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03605F_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "10.5",
						stock: 20
					},
					{
						talla: "11.0",
						stock: 20
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					},
					{
						talla: "12.5",
						stock: 20
					},
					{
						talla: "13.0",
						stock: 20
					},
					{
						talla: "13.5",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/63310_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/63310_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/63310_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/63310_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan Jumpman Big Air Mesh Shorts",
		marca: "jordan",
		descripcion:
			"Vestirse es muy fácil para tus hijos con los pantalones cortos Jordan Jumpman Big Air Mesh. La cinturilla elástica acanalada con cordón funcional para tallas 4 a XXL garantiza un ajuste cómodo, perfecto para que tus hijos activos se mantengan en movimiento. Estos pantalones cortos, que se ubican debajo de la cintura, son ultracómodos, mientras que los dos bolsillos laterales ofrecen fácil almacenamiento para lo esencial. Terminados con un logotipo de Jordan Air en la pierna, los pantalones cortos de malla Jordan Jumpman Big Air son elegantes y suaves, ¡como los de tus hijos!",
		precio: 19.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
		genero: "masculino",
		subcategoria: "shorts",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/9B219R78_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/9B219R78_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/9B219R78_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan Air Diamond Shorts",
		marca: "jordan",
		descripcion:
			"Son livianos, absorben la humedad y son los pantalones cortos Jordan Air Diamond: la elección perfecta para los estudiantes activos de primaria. Estos pantalones cortos de malla llegan por encima de la rodilla y ofrecen a sus hijos libertad de movimiento durante cada actividad. Terminados con paneles de diamantes clásicos e íconos Jumpman, los pantalones cortos Jordan Air Diamond envuelven a tus hijos con el look atlético perfecto.",
		precio: 29.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "masculino",
		subcategoria: "shorts",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5B136023_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5B136023_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5B136023_om4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan 23 Jersey",
		marca: "jordan",
		descripcion:
			"Deje que sus hijos representen el icónico número 23 con la camiseta Jordan 23. Diseñada para jugadores jóvenes, esta camiseta cuenta con malla transpirable que mantiene a sus hijos frescos y listos para jugar. El corte extragrande aporta el estilo clásico del baloncesto al estilo atlético de tus hijos. Mira a tus muchachos dominar la cancha de manera legendaria con la camiseta Jordan 23.",
		precio: 58.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "masculino",
		subcategoria: "camisetas",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5A773R78_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5A773R78_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5A773R78_om3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5A773R78_om4?wid=565&hei=565&fmt=png-alpha"
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/9A773023_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/9A773023_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/9A773023_om3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/9A773023_om4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan Air Diamonds Short Sleeve T-Shirt",
		marca: "jordan",
		descripcion:
			"Cuando el mundo duerme, las leyendas actúan. Deja que tus jóvenes jugadores realicen horas de ejercicios con estilo con la camiseta de manga corta Jordan Air Diamonds. Confeccionada con un tejido de punto suave, ligero y aireado, esta camiseta mantiene a tus hijos frescos a medida que aumenta el ritmo de entrenamiento. Ya sea por diversión o por el próximo torneo, ayuda a tus futuros All-Stars a ser lo mejor que puedan con la camiseta de manga corta Jordan Air Diamonds.",
		precio: 19.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "masculino",
		subcategoria: "camisetas",
		opciones: [
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5C743X0L_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5C743X0L_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5C743X0L_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["blanco"]
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5C743001_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5C743001_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5C743001_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan Modern AOP T-Shirt",
		marca: "jordan",
		descripcion:
			"Deja que tus hijos mejoren su apariencia con la camiseta Jordan Modern AOP. Confeccionada con tela de algodón suave, esta camiseta brinda comodidad durante todo el día mientras sus hijos salen. El cuello acanalado garantiza un ajuste elástico y ceñido, mientras que el estampado Jordan en toda la prenda ofrece un estilo atrevido y destacado.",
		precio: 32.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5B825023_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5B825023_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5B825023_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan Jumpman Flight Stamps Short Sleeve T-Shirt",
		marca: "jordan",
		descripcion:
			"Dale a tus hijos la libertad de disfrutar plenamente del juego que aman con la camiseta de manga corta Jordan Jumpman Flight Stamps. Confeccionada con un tejido de punto ultrasuave y transpirable, esta camiseta mantiene a tus hijos cómodos desde el momento de jugar hasta el tiempo de inactividad. Ya sea que estén practicando sus ejercicios o descansando después del juego, la camiseta de manga corta Jordan Jumpman Flight Stamps es el mejor aliado para todo lo que sus hijos tienen en mente.",
		precio: 28.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "masculino",
		subcategoria: "camisetas",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5D006421_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5D006421_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Jordan 2X 3 Peat Short Sleeve T-Shirt",
		marca: "jordan",
		descripcion:
			"Escuela, deporte, dormir, repetir! Deje que sus hijos afronten sus días ocupados con comodidad con la camiseta de manga corta Jordan 2X 3 Peat. Confeccionada con un tejido de punto suave y transpirable, esta camiseta ayuda a tus hijos a estar listos para jugar y divertirse en todo momento. Observe a sus imparables hijos ser las estrellas del juego y todo lo demás que hacen con la camiseta de manga corta Jordan 2X 3 Peat.",
		precio: 28.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/5C835023_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5C835023_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/5C835023_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "POWER WORKOUT TEE",
		marca: "adidas",
		descripcion:
			"Supera tus estancamientos con esta camiseta de entrenamiento adidas. Cuando tu entrenamiento requiere potencia y resistencia, AEROREADY absorbe el sudor para mantenerte seco y lograr el máximo rendimiento. El estampado arenisca gana puntos de estilo en la sala de pesas.Este producto está fabricado con al menos un 70% de materiales reciclados. Al reutilizar materiales que ya han sido creados, ayudamos a reducir el desperdicio y nuestra dependencia de recursos finitos y reducimos la huella de los productos que fabricamos.",
		precio: 50.0,
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
					codigosHex: ["#808080"],
					nombres: ["gris"]
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bddee1a319744889be74fa55734bea53_9366/Power_Workout_Tee_Black_IK9685_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/781e22982b47482aa16f3a132b9993cd_9366/Power_Workout_Tee_Black_IK9685_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6df05942dbdb449a8cf4e56ac7d32f53_9366/Power_Workout_Tee_Black_IK9685_01_laydown.jpg"
				]
			},
			{
				colores: {
					codigosHex: ["#ffff00"],
					nombres: ["amarillo"]
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/315f87c967304746bfc52631daa6efdc_9366/Power_Workout_Tee_Orange_IS3806_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/de0db0582130423480ca10a6b78937fb_9366/Power_Workout_Tee_Orange_IS3806_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26a54d44291344b4a44637c1f0e330ae_9366/Power_Workout_Tee_Orange_IS3806_01_laydown.jpg"
				]
			}
		]
	},
	{
		nombre: "GERMANY 2024 HOME AUTHENTIC JERSEY",
		marca: "adidas",
		descripcion:
			"Lleva tu orgullo hasta el estadio con la camiseta local auténtica de Alemania 2024, una pieza súper liviana que acerca el ADN alemán a tu corazón. El innovador uniforme está confeccionado con un tejido transpirable que absorbe la humedad con HEAT.RDY para mantenerte seco. El corte entallado añade una dosis extra de estilo mientras animas a la Mannschaft.",
		precio: 150.0,
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
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/449183eb88de46e7a9fe7f1b594fdd4c_9366/Germany_2024_Home_Authentic_Jersey_White_IZ1620_HM1.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a50bd4f6b234f698bce14672fd7ad9f_9366/Germany_2024_Home_Authentic_Jersey_White_IZ1620_HM3_hover.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/01dafd3f3ea54e32ae5de2f56240d202_9366/Germany_2024_Home_Authentic_Jersey_White_IZ1620_HM4.jpg"
				]
			}
		]
	},
	{
		nombre: "CAMO TONGUE TEE",
		marca: "adidas",
		descripcion:
			"Cuando el camuflaje llama, esta cómoda camiseta responde. Combina una insignia de adidas Originals con un camuflaje fresco y contemporáneo que es una versión fresca y sobria de lo tradicional. Confeccionado con un suave tejido de punto de algodón, ofrece una comodidad suprema para aventuras fuera de la red. Para aquellos a quienes les gusta permanecer encubiertos, este estilo lo tiene cubierto.",
		precio: 32.0,
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c749ca9fafa148a9b0b27569a305e1f7_9366/Camo_Tongue_Tee_Black_IS0236_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b4dfdb634d6546c5a56ed846dc268e4a_9366/Camo_Tongue_Tee_Black_IS0236_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa0afa96060e486ba2f8d5936cdfebf2_9366/Camo_Tongue_Tee_Black_IS0236_01_laydown.jpg"
				]
			}
		]
	},
	{
		nombre: "VRCT SHORT SLEEVE TEE",
		marca: "adidas",
		descripcion:
			"Creado para creadores. Esta camiseta adidas canaliza la herencia atlética a través de un diseño moderno. Un atrevido gráfico del Trifolio mantiene el estilo al frente y al centro, que se repite en la parte posterior con un estilo de gran tamaño. La confección de algodón transpirable te mantiene cómodo todo el día y el cuello redondo clásico añade un toque tradicional.",
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1857299772324d54938c2e6de238e598_9366/VRCT_Short_Sleeve_Tee_White_IS0186_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ac36189b095d4a79956e4484dae9ff1d_9366/VRCT_Short_Sleeve_Tee_White_IS0186_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c94984a9e00e4b0986f9295ece7a8c15_9366/VRCT_Short_Sleeve_Tee_White_IS0186_25_model.jpg"
				]
			},
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b403176cb2e4ca98813e49bbc6272b6_9366/VRCT_Short_Sleeve_Tee_Brown_IS0185_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7699ae7633f342cab7c9f2458262643c_9366/VRCT_Short_Sleeve_Tee_Brown_IS0185_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3750e931bf647abb05d9b832dda3289_9366/VRCT_Short_Sleeve_Tee_Brown_IS0185_25_model.jpg"
				]
			}
		]
	},
	{
		nombre: "INTER MIAMI CF 24/25 MESSI HOME JERSEY",
		marca: "adidas",
		descripcion:
			"Orgulloso. Apasionado. Rosa. Mostrando un nuevo tono para una nueva temporada, esta camiseta adidas del Inter Miami CF destaca con los colores característicos del club. Contribuyendo al diseño limpio y elegante, la insignia del equipo y el logotipo de las 3 barras se mueven hacia el centro, mientras que el nombre y el número de Messi rezuman calidad de estrella en la parte posterior. Detrás de esos looks de superestrella, AEROREADY absorbe la humedad para mantener cómodos a los fanáticos del fútbol.",
		precio: 130.0,
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
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/371a88bf8c704c47ae51d53272243276_9366/Inter_Miami_CF_24-25_Messi_Home_Jersey_Pink_JE9741_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f7457ed88622439c8d0f414a6a5df606_9366/Inter_Miami_CF_24-25_Messi_Home_Jersey_Pink_JE9741_25_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb5aa62fe3ac490eb46221986fc2ee30_9366/Inter_Miami_CF_24-25_Messi_Home_Jersey_Pink_JE9741_01_laydown.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7fd012dec514446c8b7b4731f0f19596_9366/Inter_Miami_CF_24-25_Messi_Home_Jersey_Pink_JE9741_02_laydown.jpg"
				]
			}
		]
	},
	{
		nombre: "ADICOLOR CLASSICS 3-STRIPES LONG SLEEVE TEE",
		marca: "adidas",
		descripcion:
			"Cuando un clásico se reinventa, sabes que tiene poder de permanencia y un estilo llamativo. Ponte esta camiseta de manga larga adidas y sal con una actitud de alto contraste. Las icónicas 3 rayas y el trébol bordado dan un toque retro con un toque moderno. El corte entallado y los detalles acanalados mantienen el estilo clásico de principio a fin.",
		precio: 45.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas manga larga",
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e041741b19948d0a870af1200b1dcbe_9366/Adicolor_Classics_3-Stripes_Long_Sleeve_Tee_White_IA4879_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5058fad2d4bf42c8add3af1200b1e3ea_9366/Adicolor_Classics_3-Stripes_Long_Sleeve_Tee_White_IA4879_22_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9970e69f79d4e8e9ddbaf1200b1ec0c_9366/Adicolor_Classics_3-Stripes_Long_Sleeve_Tee_White_IA4879_23_hover_model.jpg"
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b7eefbce89f4f2eb846af1200b18924_9366/Adicolor_Classics_3-Stripes_Long_Sleeve_Tee_Black_IA4877_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7aa1a37290a5417e9949af1200b19279_9366/Adicolor_Classics_3-Stripes_Long_Sleeve_Tee_Black_IA4877_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98cff27c43e440b3b0c7af1200b19a72_9366/Adicolor_Classics_3-Stripes_Long_Sleeve_Tee_Black_IA4877_25_model.jpg"
				]
			}
		]
	},
	{
		nombre: "OWN THE RUN LONG SLEEVE TEE",
		marca: "adidas",
		descripcion:
			"Este producto está fabricado con al menos un 70% de materiales reciclados. Al reutilizar materiales que ya han sido creados, ayudamos a reducir el desperdicio y nuestra dependencia de recursos finitos y reducimos la huella de los productos que fabricamos.",
		precio: 45.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas manga larga",
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b5fb5be34d8488184108230d4429dee_9366/Own_The_Run_Long_Sleeve_Tee_Blue_IN1488_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b5f51ec310c473d95e9ed5cb5fa1daf_9366/Own_The_Run_Long_Sleeve_Tee_Blue_IN1488_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2036fb975d6b40148cdc935d41bde8fe_9366/Own_The_Run_Long_Sleeve_Tee_Blue_IN1488_01_laydown.jpg"
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9c5912bdfc74068822e8ea8425314c4_9366/Own_The_Run_Long_Sleeve_Tee_Black_IN1486_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f54a4e07ecf744299bc68c866f9b94b4_9366/Own_The_Run_Long_Sleeve_Tee_Black_IN1486_23_hover_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b00a0f958d274443abfba512d6c2c7e2_9366/Own_The_Run_Long_Sleeve_Tee_Black_IN1486_01_laydown.jpg"
				]
			}
		]
	},
	{
		nombre: "UNIVERSITY OF LOUISVILLE TOURNAMENT SHOOTING SHIRT",
		marca: "adidas",
		descripcion:
			"Vístete con los Cardinals con esta auténtica camiseta de tiro de la Universidad de Louisville, perfecta para usar en las gradas o en la cancha.",
		precio: 45.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas manga larga",
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f1dad9e788a4544853ecd2361076b3d_9366/University_Of_Louisville_Tournament_Shooting_Shirt_Red_JN3172_01_laydown.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4656ddeb84cc4f78a0d63a4e87b750bb_9366/University_Of_Louisville_Tournament_Shooting_Shirt_Red_JN3172_02_laydown_hover.jpg"
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2618f6fea9ad4309b2d1a5b31a3646dd_9366/University_of_Kansas_Tournament_Shooting_Shirt_Blue_JN3173_01_laydown.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95ad487c7cdb47dc9a7b200f5c9c0520_9366/University_of_Kansas_Tournament_Shooting_Shirt_Blue_JN3173_02_laydown_hover.jpg"
				]
			}
		]
	},
	{
		nombre: "Y-3 RUST DYE LONG SLEEVE TEE",
		marca: "adidas",
		descripcion:
			"Las ricas variaciones de color que se encuentran naturalmente en el cobre y el óxido inspiraron la camiseta de manga larga Y-3 Rust Dye, teñida con metal y vapor. Confeccionado con un material suave con una caída fluida, está cortado con líneas que se asemejan a las curvas y contornos del balón de fútbol adidas Teamgeist. El ajuste relajado recibe un toque entallado con un cuello redondo clásico.",
		precio: 45.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas manga larga",
		opciones: [
			{
				colores: {
					codigosHex: ["#ffff00"],
					nombres: ["amarillo"]
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb2950a249b44579bc07e955f10c7bef_9366/Y-3_Rust_Dye_Long_Sleeve_Tee_Multicolor_IR6256_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2762f36499904ee2a977408f7d5d9854_9366/Y-3_Rust_Dye_Long_Sleeve_Tee_Multicolor_IR6256_22_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1378a4e74f734ba1a777d4d5921ae9e9_9366/Y-3_Rust_Dye_Long_Sleeve_Tee_Multicolor_IR6256_23_hover_model.jpg"
				]
			}
		]
	},
	{
		nombre: "Y-3 RUNNING LONG SLEEVE TEE",
		marca: "adidas",
		descripcion:
			"Combinando lo mejor de la moda y la funcionalidad, la camiseta de manga larga Y-3 Running está diseñada para el movimiento. Está confeccionado con un tejido de poliéster reciclado que incluye elasticidad para facilitar su uso. Un revestimiento de poliuretano ayuda a expulsar el agua y un cuello redondo mantiene la sensación de ajuste perfecto. El toque final: la firma de Yohji Yamamoto en la espalda en un estampado reflectante que destaca cuando hay poca luz.",
		precio: 190.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "camisetas manga larga",
		opciones: [
			{
				colores: {
					codigosHex: ["#808080"],
					nombres: ["gris"]
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
					}
				],
				imagenes: [
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/93aaa2f1b26d4ec0a81a5225f3f5bce4_9366/Y-3_Running_Long_Sleeve_Tee_Grey_IV5605_21_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33e2fdb2e3b8447bb6c51e8c19ce3635_9366/Y-3_Running_Long_Sleeve_Tee_Grey_IV5605_22_model.jpg",
					"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/59fdb06727844dc1a60dd26cac9b7693_9366/Y-3_Running_Long_Sleeve_Tee_Grey_IV5605_23_hover_model.jpg"
				]
			}
		]
	}
];

module.exports = productos;
