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
	},
	{
		nombre: "Nike Tricot Set",
		marca: "nike",
		descripcion:
			"Este conjunto de punto Nike Block Tricot del tamaño de una pinta para tu pequeño no falla con su atención al detalle y su estilo deportivo. Una chaqueta con cremallera completa y cuello alto mantiene a tu pequeño abrigado, mientras que los pantalones de tricot con dos bolsillos incluyen una cinturilla incorporada para mantenerlos en su lugar. Los tobillos y las mangas con puños aseguran que el ajuste sea perfecto, y las letras cónicas de Nike en las costuras agregan un toque moderno a este divertido conjunto de tricot.",
		precio: 48.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "camisetas manga larga",
		opciones: [
			{
				colores: {
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
				},
				tallas: [
					{
						talla: "4",
						stock: 20
					},
					{
						talla: "5",
						stock: 20
					},
					{
						talla: "6",
						stock: 20
					},
					{
						talla: "7",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/P796G684_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/P796G684_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/P796G684_04?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Originals T-Shirt",
		marca: "adidas",
		descripcion:
			"Prepare a sus niños en edad preescolar para sus citas de juego y diversión bajo el sol con el conjunto de camiseta y pantalones cortos adidas. Repleto de estilo deportivo y comodidad informal, este conjunto aporta estilo al estilo diario de tus pequeños. La confección íntegramente en algodón envuelve a tus niñas de una manera sencilla, manteniéndolas listas para lo que mejor saben hacer (divertirse).",
		precio: 38.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "camisetas",
		opciones: [
			{
				colores: {
					codigosHex: ["#FF71CD", "#ffffff"],
					nombres: ["rosado", "blanco"]
				},
				tallas: [
					{
						talla: "4",
						stock: 20
					},
					{
						talla: "5",
						stock: 20
					},
					{
						talla: "6",
						stock: 20
					},
					{
						talla: "7",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/HK2944_a1?wid=500&hei=500&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/HK2944_a2?wid=500&hei=500&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/HK2944_a3?wid=500&hei=500&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Club Fleece Shorts",
		marca: "nike",
		descripcion:
			"Deja que tus pequeñas se unan al club del estilo clásico de Nike con los pantalones cortos Nike Club Fleece. Confeccionados con una suave tela de felpa francesa, estos pantalones cortos mantienen un aspecto deportivo y elegante durante todo el día, todos los días. Los bolsillos funcionales mantienen sus elementos esenciales cerca, mientras que el cordón ofrece un ajuste perfecto para jugar. Observe cómo sus pequeñas se destacan con el estilo fresco de Nike con los pantalones cortos Nike Club Fleece.",
		precio: 32.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "shorts",
		opciones: [
			{
				colores: {
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
				},
				tallas: [
					{
						talla: "4",
						stock: 20
					},
					{
						talla: "5",
						stock: 20
					},
					{
						talla: "6",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/6I301A9Y_om1?wid=500&hei=500&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6I301A9Y_om3?wid=500&hei=500&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "4",
						stock: 20
					},
					{
						talla: "5",
						stock: 20
					},
					{
						talla: "6",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/6I301023_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6I301023_om3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Club Fleece High Low FZ Hoodie",
		marca: "nike",
		descripcion:
			"Mantenga a sus niños en edad preescolar preparados para jugar durante todo el día incluso cuando hace frío afuera con la sudadera con capucha Nike Club Fleece High Low FZ. Diseñada para ser más larga, esta sudadera con capucha es fácil de peinar y ofrece amplia cobertura y comodidad. La capucha, los hombros caídos y las mangas largas mantienen a tus niñas abrigadas y listas para cualquier aventura. Perfecta para usar en capas, la sudadera con capucha Nike Club Fleece High Low FZ completa la rotación de temporada de tus pequeñas con una frescura elegante.",
		precio: 44.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "hoodies",
		opciones: [
			{
				colores: {
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
				},
				tallas: [
					{
						talla: "4",
						stock: 20
					},
					{
						talla: "5",
						stock: 20
					},
					{
						talla: "6",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/6I254A9Y_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6I254A9Y_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6I254A9Y_om3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Zip Hoodie",
		marca: "puma",
		descripcion:
			"¡Zip, zap, zoom! La sudadera con capucha con cremallera PUMA permite que tus niñas inicien su rutina diaria con estilo. Confeccionada con una mezcla de tejidos ligeros y suaves, esta sudadera con capucha es perfecta para combinarla con otras capas. Fácil de combinar con todos los conjuntos favoritos de tus niñas, la sudadera con capucha PUMA Zip es una incorporación versátil a su rotación diaria.",
		precio: 44.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "hoodies",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/PFAFM681_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/PFAFM681_a1?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Tech Fleece Full-Zip Hoodie",
		marca: "nike",
		descripcion:
			"¡El invierno está cerca! Y será una batalla constante entre el clima frío y el tiempo de juego de tus niñas. Equipa a tus niñas con la sudadera con capucha Nike Tech Fleece Full-Zip y ayúdalas a conquistar el frío con estilo. Confeccionada con tejido polar técnico liviano y de primera calidad que es suave por dentro y por fuera, esta sudadera con capucha mantiene a sus hijos abrigados y listos para divertirse al aire libre sin agregar volumen. Diseñada para todas las formas y tamaños, el ajuste mejorado de esta sudadera con capucha permite libertad de movimiento, para que tus niñas puedan andar en bicicleta o jugar a la pelota con comodidad. Observe a sus hijas escapar de los vientos fríos con la sudadera con capucha Nike Tech Fleece con cremallera completa.",
		precio: 105.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
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
					"https://images.footlocker.com/is/image/EBFL2/D2979450_om1?wid=500&hei=500&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D2979450_om2?wid=500&hei=500&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike International Hoops T-Shirt",
		marca: "nike",
		descripcion:
			"Aventura sin fin en el ocio deportivo, la camiseta Nike International Hoops mantiene a tus jóvenes estrellas del baloncesto listas para el juego y más. Un clásico que nunca falla, esta camiseta amplifica los movimientos de tus hijos en la cancha y brinda vibraciones relajadas durante todas sus sesiones posteriores al partido. La camiseta Nike International Hoops, una camiseta clásica que celebra el baloncesto, permite a tus hijos hacerlo al estilo Nike.",
		precio: 25.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
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
					"https://images.footlocker.com/is/image/EBFL2/R9627697_om1?wid=500&hei=500&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/R9627697_om2?wid=500&hei=500&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike NSW Wash Shorts",
		marca: "nike",
		descripcion:
			"Deja que tus chicas vivan en la nube nueve con la camiseta Nike NSW Wash Shorts. Confeccionados con un tejido de punto suave con un tacto ligeramente más grueso, estos pantalones cortos mantienen a sus hijos de primaria cómodos y relajados durante todo el día. Acentuada con nubes coloridas, la camiseta Nike NSW Wash Shorts permite que tus niñas luzcan como el sol en un día nublado.",
		precio: 19.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "shorts",
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
					"https://images.footlocker.com/is/image/EBFL2/X5072623_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X5072623_om3?wid=565&hei=565&fmt=png-alpha"
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
					"https://images.footlocker.com/is/image/EBFL2/X5072468_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X5072468_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike NSW Boxy Print T-Shirt",
		marca: "nike",
		descripcion:
			"Deja que tus chicas mejoren su estilo con la camiseta Nike NSW Boxy Print. Confeccionada con un suave tejido de algodón de uso diario, esta camiseta mantiene a tus hijos de primaria frescos y relajados mientras andan todo el día. Con un ajuste cuadrado que se siente un poco holgado alrededor de las mangas y el cuerpo, la camiseta Nike NSW Boxy Print permite a tus hijos aprovechar el día con estilo sin esfuerzo.",
		precio: 25.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "camisetas",
		opciones: [
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
					"https://images.footlocker.com/is/image/EBFL2/Z3579100_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Z3579100_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Essential Boxy T-Shirt",
		marca: "nike",
		descripcion:
			"La apariencia elegante, relajada y sencilla de la camiseta Nike Essential Boxy es perfecta para tus hijos. Increíblemente ligera y cómoda, esta camiseta es la mejor opción para usar durante todo el día. La construcción de tela transpirable totalmente natural significa que esta camiseta seguramente terminará en la lista de favoritas de sus hijos. Mantenga a sus hijos viéndose y sintiéndose como una superestrella con esta camiseta duradera y versátil que combina bien con cualquier prenda inferior y calzado.",
		precio: 20.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "camisetas",
		opciones: [
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
					"https://images.footlocker.com/is/image/EBFL2/D5750100_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D5750100_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike AOP Fleece Hoodie",
		marca: "nike",
		descripcion:
			"Deja que tus hijas mantengan siempre su estilo con la sudadera con capucha Nike AOP Fleece. Confeccionada con un suave tejido afelpado, esta sudadera con capucha brinda una comodidad increíble e inigualable para tus niñas. El estampado especial en oro metálico brilla desde la mañana hasta la noche, garantizando un estilo inigualable. Diseñado para brindar cobertura adicional, el dobladillo trasero más largo brinda un soporte excelente. Los bolsillos delanteros ofrecen espacio para guardar lo esencial mientras tus hijas salen a pasar el día.",
		precio: 55.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "infantes",
		genero: "femenino",
		subcategoria: "hoodies",
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
					"https://images.footlocker.com/is/image/EBFL2/V3225698_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/V3225698_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike DW Club LBR LS Half-Zip Fleece Hoodie",
		marca: "nike",
		descripcion:
			"Con clima fresco o cálido, tus hijas descansarán con total comodidad durante todo el año con la sudadera con capucha de polar con media cremallera Jordan DW Club LBR LS. Suave por fuera y suave por dentro, esta cómoda sudadera con capucha mantiene a tus hijos cómodos y cómodos con un tejido polar cepillado y ligero. El estiramiento extra en los puños proporciona comodidad duradera y un ajuste fácil de poner y quitar, mientras que el logotipo de Futura bordado eleva el cociente de estilo de tus niñas. Desde el patio de recreo hasta la práctica y la finalización de algunos deberes de último momento, la sudadera con capucha de tejido polar con media cremallera Jordan DW Club LBR LS mantiene a tus hijas en movimiento a pesar de todo.",
		precio: 45.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/F2930010_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/F2930010_om2?wid=565&hei=565&fmt=png-alpha"
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/D2930126_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D2930126_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Cowboys Game Jersey",
		marca: "nike",
		descripcion: "N/A",
		precio: 85.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "infantes",
		genero: "femenino",
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
					"https://images.footlocker.com/is/image/EBFL2/ZZ022904_a1?wid=500&hei=500&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas AE 1 Velocity Blue",
		marca: "adidas",
		descripcion:
			"Hay muy pocos jugadores como Anthony Edwards. Al poseer una habilidad única para sobresalir en el juego de transición, Ant-Man ha irrumpido en escena y parece que llegó para quedarse. Es hora de celebrar su atletismo de alto nivel y sus habilidades depredadoras para cazar cubos con el adidas AE 1 Velocity Blue. Diseñados para jugadores certificados, estos zapatos de básquetbol combinan la exclusiva entresuela adidas Boost y la amortiguación Lightstrike para mantener tu paso firme, técnico y sumamente cómodo. Escribe tu propia leyenda en la cancha con las adidas AE 1 Velocity Blue.",
		precio: 85.0,
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
					codigosHex: ["#0000ff"],
					nombres: ["azul"]
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
					"https://images.footlocker.com/is/image/EBFL2/IF1864_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF1864_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF1864_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF1864_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Suede Shanks",
		marca: "puma",
		descripcion:
			"El PUMA Suede, un revolucionario desde 1968, une fuerzas con el Jefe de los Piratas Pelirrojos para aventuras en alta mar y un estilo urbano icónico. La silueta vintage luce su exclusiva parte superior de gamuza en una apariencia atrevida que hace un guiño al arte y la caracterización de One Piece. Estas zapatillas cuentan con una combinación de comodidad y durabilidad que resiste los mares (o calles) impredecibles por los que vas a navegar.",
		precio: 85.0,
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
					"https://images.footlocker.com/is/image/EBFL2/39652101_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39652101_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39652101_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39652101_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Suede",
		marca: "puma",
		descripcion:
			"Deja tu huella en las calles con PUMA Suede. El Suede irrumpió en escena en 1968 y ha estado cambiando las reglas del juego desde entonces. Una obra maestra estética, estos zapatos han tenido un gran impacto en la sociedad y la cultura. Desde la protesta de Tommie Smith en el estrado de la victoria durante los Juegos Olímpicos de 1968 hasta los grupos de b-boys en Nueva York luciendo los zapatos en la década de 1980, estas zapatillas han sido un clásico inolvidable listo para la próxima gran novedad. Como parte de la franquicia 'Ain't Broke' del 75 aniversario de PUMA, PUMA Suede recupera los diseños vintage clásicos del pasado de PUMA mezclados con elementos modernos para una experiencia extraordinariamente elegante y cómoda.",
		precio: 85.0,
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
					codigosHex: ["#ffff00", "#ffffff"],
					nombres: ["amarillo", "blanco"]
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
					"https://images.footlocker.com/is/image/EBFL2/39158901_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39158901_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39158901_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Suede Beavis & Butthead",
		marca: "puma",
		descripcion:
			"¡Ríe fuerte, camina orgulloso! Maximiza la comodidad y la diversión con las PUMA Suede Beavis & Butthead. Basados ​​en la popular serie animada estadounidense Beavis y Butt-Head, estos zapatos añaden un encanto peculiar a tu look diario. Estas siluetas icónicas, que forman parte de la historia de las Suede, aparecieron en escena en 1968 y han estado cambiando las reglas del juego desde entonces. Usadas por íconos de cada generación, estas zapatillas clásicas continúan creciendo y legitimándose al mismo tiempo que te permiten unirte a la liga de personas auténticas y expresivas. Atemporales, cómodas y muy divertidas, las PUMA Suede Beavis & Butthead añaden un estilo divertido a tus pasos.",
		precio: 59.99,
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
					"https://images.footlocker.com/is/image/EBFL2/39671501_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39671501_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39671501_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/39671501_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Hoops x Cheetos Hoodie",
		marca: "puma",
		descripcion:
			"¡Alerta de estilo snackable! Sumérgete en un mundo de sabor y estilo con la sudadera con capucha PUMA Hoops x Cheetos. Suave, deportiva y llamativa, esta sudadera con capucha eleva tu estilo urbano con la audaz alianza de PUMA Hoops y Cheetos. Con al menos un 20 % de algodón reciclado, esta sudadera con capucha te permite abrazar tu pasión por el juego y tu amor por el planeta con cada movimiento que haces. El ajuste relajado hace que cada movimiento sea un placer sin esfuerzo. Disfrute de estilos destacados y comodidad sostenible con la sudadera con capucha PUMA Hoops x Cheetos.",
		precio: 80.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "hoodies",
		opciones: [
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
					"https://images.footlocker.com/is/image/EBFL2/62586701_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/62586701_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Hoops X LaFrance Holiday Sherpa",
		marca: "puma",
		descripcion:
			"Dispara al aro con estilo con el PUMA Hoops X LaFrance Holiday Sherpa. Diseñada en colaboración con la marca de moda de estilo de vida oficial de LaMelo Ball, LaFrance, esta sudadera con capucha hace alarde de un estilo atrevido y gráficos pop que elevan tu estilo. El logotipo de LaFrance muestra tu amor por el juego y por tu jugador favorito, mientras que los bolsillos delanteros brindan espacio de almacenamiento para guardar lo esencial. Fabricado con material 100% reciclado, excluyendo adornos y adornos, el PUMA Hoops X LaFrance Holiday Sherpa representa una de las soluciones de la marca hacia cero emisiones de carbono y cero residuos.",
		precio: 100.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "hoodies",
		opciones: [
			{
				colores: {
					codigosHex: ["#000000", "#ff0000"],
					nombres: ["negro", "rojo"]
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
					"https://images.footlocker.com/is/image/EBFL2/62283701_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/62283701_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Authentic Varsity Leather Jacket",
		marca: "nike",
		descripcion:
			"Ya sea que vayas a ver un partido o pasees por el centro con temperaturas más frías, la chaqueta de cuero Nike Authentic Varsity es perfecta para usarla en todo momento. Esta chaqueta de corte amplio, que vuelve a poner en primer plano las cualidades atemporales de tu vieja chaqueta favorita, viene con hombros caídos que mantienen tu look impecable. Las mangas están hechas de cuero de plena flor de lujo que se siente flexible, se desgasta bien y envejece a la perfección, mientras que el forro de tafetán tiene un tacto suave para ponerse y quitarse fácilmente. El lado exterior es una mezcla de lana cepillada para brindar comodidad y el interior incluye un aislamiento sintético liviano que brinda calidez. Clásica y cómoda, la chaqueta de cuero Nike Authentic Varsity seguramente ganará un primer lugar en tu rotación.",
		precio: 500.0,
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
					"https://images.footlocker.com/is/image/EBFL2/D7845010_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/D7845010_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Club Jacket",
		marca: "nike",
		descripcion:
			"Nada grita más icónico que Nike. Únete al club del estilo urbano icónico con la chaqueta Nike Club. Diseñada para ofrecer calidez ligera y versatilidad, esta chaqueta está confeccionada con mucha tela adicional en un ajuste espacioso y extragrande para ayudarte a vestirte con estilo. El diseño de cremallera completa te permite personalizar tu look, mientras que los bolsillos con cremallera mantienen tus elementos esenciales cerca. Acentuada con un patrón de puntos estampado por toda la prenda y un logotipo de Futura bordado en el pecho izquierdo, la chaqueta Nike Club causa una gran impresión de estilo.",
		precio: 39.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "chaquetas",
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
					"https://images.footlocker.com/is/image/EBFL2/X0531480_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X0531480_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Anorak Jacket",
		marca: "nike",
		descripcion:
			"Es hora de aumentar las apuestas en la moda. Inspirada en la pista y moderna, la chaqueta Nike Anorak hace una declaración como ninguna otra. El ajuste extragrande te ayuda a ponerte capas con estilo, mientras que los detalles icónicos como el clásico ángulo de chevrón cosido y el logotipo de Futura bordado en el pecho izquierdo te hacen lucir con estilo. Detalles funcionales como la capucha plegable y el tejido repelente al agua hacen de esta chaqueta ligera la capa exterior definitiva. Mantente al tanto de tu moda todo el día, todos los días, con la chaqueta Nike Anorak.",
		precio: 39.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "chaquetas",
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
					"https://images.footlocker.com/is/image/EBFL2/Q4910405_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4910405_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					"https://images.footlocker.com/is/image/EBFL2/Q4910100_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4910100_om2?wid=565&hei=565&fmt=png-alpha"
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
					"https://images.footlocker.com/is/image/EBFL2/Q4910706_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4910706_om2?wid=565&hei=565&fmt=png-alpha"
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
					"https://images.footlocker.com/is/image/EBFL2/Q4910717_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4910717_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Electric Anorak Jacket",
		marca: "nike",
		descripcion:
			"La chaqueta Nike Electric Anorak es todo lo que necesitas para lucir elegante y al mismo tiempo estar calentito. Confeccionada con un tejido ligero y de primera calidad, esta chaqueta te permite mantenerte abrigado y cómodo desde el amanecer hasta el anochecer con facilidad. Afronta los días fríos con comodidad y estilo superiores con la chaqueta Nike Electric Anorak.",
		precio: 49.99,
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
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/J1634662_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/J1634662_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Club Woven Jacket",
		marca: "nike",
		descripcion:
			"Una elección fácil para el aire libre, la chaqueta Nike Club Woven ofrece comodidad suave y liviana y te mantiene protegido contra los elementos. El suave tejido de tafetán es repelente al viento y al agua, lo que te ayuda a mantenerte abrigado y seco, mientras que el forro de malla y el tejido elástico añaden comodidad y frescura a la mezcla. Nítida y limpia en el frente, atrevida y colorida en la parte posterior: la chaqueta tejida Nike Club agrega un estilo fresco y divertido a tu equipo para actividades al aire libre.",
		precio: 95.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "chaquetas",
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
					"https://images.footlocker.com/is/image/EBFL2/X0672010_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X0672010_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					"https://images.footlocker.com/is/image/EBFL2/X0672030_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/X0672030_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Tech Woven Jacket",
		marca: "nike",
		descripcion:
			"Sube el cierre y mantente seco con la chaqueta Nike Tech Woven. Confeccionada con tejido arrugado, esta chaqueta ligera se siente suave contra la piel y ofrece un acabado texturizado. El diseño de cremallera completa con capucha forrada de malla brinda cobertura transpirable y estilo versátil. La cremallera Aquaguard de dos direcciones te ayuda a mantenerte seco, mientras que los bolsillos laterales con cremallera Aquaguard de la chaqueta Nike Tech Woven te brindan un lugar seco para guardar tus elementos esenciales y calentar tus manos.",
		precio: 89.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "chaquetas",
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
					"https://images.footlocker.com/is/image/EBFL2/Q4340010_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4340010_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4340010_om3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#00ff00"],
					nombres: ["verde"]
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
					"https://images.footlocker.com/is/image/EBFL2/Q4340222_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4340222_om2?wid=565&hei=565&fmt=png-alpha"
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
					"https://images.footlocker.com/is/image/EBFL2/Q4340030_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q4340030_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike SPU Woven Jacket",
		marca: "nike",
		descripcion:
			"Lleva tu entrenamiento al aire libre con la chaqueta tejida Nike SPU. Diseñado para mantenerse al día con sus actividades activas, este básico de rendimiento cuenta con comodidad liviana y durabilidad con facilidad de movimiento. Con un diseño multicolor con cierre de cremallera, la chaqueta tejida Nike SPU te mantendrá abrigado y llamará la atención en cualquier pista, calle o sendero.",
		precio: 110.0,
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
					codigosHex: ["#00ff00"],
					nombres: ["verde"]
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
					"https://images.footlocker.com/is/image/EBFL2/B2192325_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/B2192325_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Pro Standard NBA All Star 24 Wool Varsity Jacket",
		marca: "NBA All Star",
		descripcion:
			"Los mates más llamativos, las monedas de diez centavos deslumbrantes y los bloqueos feroces. Experimenta cada momento del juego con comodidad con la chaqueta universitaria de lana Pro Standard NBA All Star 24. Con parches con el logo de Star sobre una base de fieltro con chenilla y bordado en 3D, esta chaqueta te permite atravesar partidos emocionantes y días difíciles mientras te ves y te sientes lo mejor posible. El parche principal en la manga derecha sobre una base de sarga con bordado en 3D y puntadas de satén ofrece una apariencia deportiva, mientras que el parche principal en la espalda en vinilo en relieve hace que tu atuendo se destaque el día del juego. Pon a prueba tus habilidades para animar y muestra el orgullo de tu equipo con la chaqueta universitaria de lana Pro Standard NBA All Star 24.",
		precio: 189.99,
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
					"https://images.footlocker.com/is/image/EBFL2/59023MNR_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/59023MNR_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/59023MNR_03?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Pro Standard NBA x HBCU All Star 23 Wool Varsity Jacket",
		marca: "NBA All Star",
		descripcion:
			"¡Donde todos son alguien! Representa a tu universidad HBCU favorita con la chaqueta universitaria de lana Pro Standard NBA x HBCU All Star 23. Diseñada con tela suave y duradera, esta sudadera con capucha te mantiene cómodo y calentito durante cuatro cuartos y más. Con parches deportivos de Grambling University en bordados de puntada de satén en 3D sobre una base de sarga, la chaqueta universitaria de lana Pro Standard NBA x HBCU All Star 23 te permite representar a los Grambling Tigers con estilo.",
		precio: 250.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "chaquetas",
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
					"https://images.footlocker.com/is/image/EBFL2/CHB67124_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/CHB67124_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/CHB67124_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Club Woven LND Flow Shorts",
		marca: "Nike",
		descripcion:
			"Una opción fácil para aventuras de todo tipo: los pantalones cortos Nike Sportswear SPE Woven LND Flow tienen que ver con la comodidad y la movilidad. Confeccionados con tejido suave y liviano con un ajuste estándar y forrados con poliéster, estos pantalones cortos son imprescindibles en tu guardarropa de verano. Ya sea que estés relajándote en el sofá o preparándote para bucear, estos pantalones cortos Nike Sportswear SPE Woven LND Flow te mantienen cómodo en todo momento.",
		precio: 50.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/M6829010_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/M6829010_om2?wid=565&hei=565&fmt=png-alpha"
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
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/M6829657_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/M6829657_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Tiro Fleece Shorts",
		marca: "adidas",
		descripcion:
			"Relájate, reagrupate, recupérate. Estos pantalones cortos adidas Tiro Fleece son perfectos para esos momentos en ambos lados de la acción. Póntelos cuando estés estirándote antes de un partido o cuando llegue el momento de regresar a casa. El acogedor forro polar de mezcla de algodón garantiza que estés cómodo. Los bolsillos con cremallera mantienen tus objetos de valor guardados de forma segura.",
		precio: 14.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/HN3285_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/HN3285_om2?wid=565&hei=565&fmt=png-alpha"
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
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/GM7345_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/GM7345_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Tiro AOP Shorts",
		marca: "adidas",
		descripcion:
			"Mejora tu look diario con los pantalones cortos adidas Tiro AOP. Confeccionados con tejido de malla transpirable, estos pantalones cortos te mantienen fresco y cómodo durante todo el día y más allá. El corte estándar logra un equilibrio entre libertad de movimiento y una apariencia contemporánea, mientras que el diseño con estampado integral agrega un aire fresco y urbano. Inspirados en el icónico gráfico de adidas Football de los años 80 y 90, estos pantalones cortos cuentan con un logotipo mediano de adidas en la pierna izquierda, una insignia de silicona con estructura en relieve y un logotipo cosido para una apariencia única y un estilo sofisticado. Aprovecha al máximo tu estilo de vida con la comodidad de los pantalones cortos adidas Tiro AOP.",
		precio: 45.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "shorts",
		opciones: [
			{
				colores: {
					codigosHex: ["#ffff00", "#0000ff"],
					nombres: ["amarillo", "azul"]
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
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/IS1533_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IS1533_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IS1533_05?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA PPE Shorts",
		marca: "puma",
		descripcion:
			"Obtén un rendimiento profesional con una apariencia elegante con los pantalones cortos PUMA PPE. Confeccionados con tejido French terry de primera calidad, estos pantalones cortos ofrecen una sensación cálida y acogedora desde el primer momento. Ya sea que estés haciendo un movimiento en la cancha o descansando en tu sofá, los pantalones cortos PUMA PPE brindan comodidad total en todo momento.",
		precio: 39.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/53714301_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/53714301_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Essential Shorts",
		marca: "puma",
		descripcion:
			"Flexiona tus carreras con los pantalones cortos PUMA Essential. Diseñado con tela suave y cinturilla elástica, puedes obtener comodidad superior y dar pasos con facilidad.",
		precio: 55.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/59981001_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/59981001_om2?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/59981004_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/59981004_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Classics Woven Shorts",
		marca: "puma",
		descripcion:
			"Mejora tu look casual con los pantalones cortos tejidos PUMA Classics. Confeccionados con tejido reciclado repelente al agua, estos pantalones cortos te mantienen fresco y cómodo durante todo el día. La cinturilla elástica con cordón interno proporciona un ajuste personalizado, mientras que los bolsillos laterales ofrecen espacio para guardar lo esencial. Con un logotipo Archive No.1 bordado, los pantalones cortos tejidos PUMA Classics combinan sin esfuerzo comodidad y estilo.",
		precio: 29.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/53806801_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/53806801_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA X Coca Cola Regular Shorts 8'",
		marca: "puma",
		descripcion:
			"Actualice su rotación con los pantalones cortos regulares PUMA X Coca Cola de 8'. Confeccionados con al menos un 20 % de materiales reciclados, estos pantalones cortos añaden un toque sustentable a su estilo informal. Diseñados en colaboración con Coca-Cola, estos pantalones cortos celebran la herencia de dos de las marcas más icónicas de la historia.",
		precio: 55.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/53616401_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/53616401_om2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/53616401_a1?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Iconic T7 Mesh Shorts",
		marca: "puma",
		descripcion:
			"Coge el pantalón corto de malla PUMA Iconic T7 para un ajuste legendario que nunca pasará de moda. Diseñados con el estampado de goma del logotipo número 1 del archivo e inserciones del panel T7, estos pantalones cortos tienen las características de una pieza clásica. Para mantener las cosas seguras y cómodas, cuenta con una cinturilla elástica con cordones externos para que puedas personalizar tu comodidad.",
		precio: 19.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/59990111_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/59990111_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/59990111_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "PUMA Every Day Hussle Sweatshort",
		marca: "puma",
		descripcion:
			"Sigue esforzándote pero con estilo con el pantalón corto PUMA Every Day Hussle. Confeccionados con una mezcla de materiales suaves y cómodos, estos pantalones cortos son perfectos para actividades cotidianas como hacer ejercicio en el gimnasio o ir de compras. Rinde homenaje al viaje empresarial de Nipsey Hussle con el pantalón corto PUMA Every Day Hussle.",
		precio: 29.99,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/53368701_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/53368701_a2?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					},
					{
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/53368702_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/53368702_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Nike Club Game Day Short",
		marca: "nike",
		descripcion:
			"Cómodos, elegantes y elegantes: los pantalones cortos Nike Club Game Day están listos para cualquier cosa. Confeccionados con tejidos de primera calidad, estos pantalones cortos combinan la comodidad clásica para un estilo urbano. Con bolsillos forrados de algodón, estos pantalones cortos te brindan un espacio cómodo para mantener tus manos calientes y tus elementos esenciales seguros. Ya sea que estés cambiando tu rutina de ejercicios o dando un paseo tranquilo, el pantalón corto Nike Club Game Day es la elección perfecta.",
		precio: 70.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "masculino",
		subcategoria: "shorts",
		opciones: [
			{
				colores: {
					codigosHex: ["#ECB159", "#00ff00"],
					nombres: ["cafe", "verde"]
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
						talla: "XLT",
						stock: 20
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/Q6146256_om1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/Q6146256_om2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Running On Empty Short Sleeve T-Shirt",
		marca: "vans",
		descripcion:
			"¿Quedarse sin nada? Potencia tu look y energiza tu día con la camiseta de manga corta Running On Vacuum de Vans. Esta camiseta de uso diario, realzada con gráficos serigrafiados, aporta energía audaz a tu conjunto. La suave tela cardada hilada en anillos brinda comodidad en la que puedes confiar en un ajuste que te permite moverte con facilidad.",
		precio: 30.0,
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
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/V8RKBLK_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/V8RKBLK_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Soaring Eagle Short Sleeve T-Shirt",
		marca: "vans",
		descripcion:
			"Colorida, informal e innegablemente moderna, la camiseta de manga corta Vans Soaring Eagle le da a tu armario una renovación divertida para el clima cálido que se avecina. Confeccionado con suave algodón hilado y acabado con un ajuste regular, este cuello redondo de manga corta ofrece la comodidad veraniega que anhelas en tu armario. Un gráfico serigrafiado realza el look con un estilo vintage. Adopta lo atrevido y luce de la vieja escuela con la camiseta de manga corta Vans Soaring Eagle.",
		precio: 25.0,
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
					},
					{
						talla: "XXL",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/V8RRFS8_a1?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans MIrada Multistripe Short Sleeve T-Shirt",
		marca: "vans",
		descripcion:
			"Dale un descanso a tus básicos y apuesta por lo atrevido con la camiseta de manga corta Vans Mirada Multistripe. Confeccionada con un tejido ligero y transpirable, esta camiseta de manga corta con cuello redondo te permite disfrutar de una comodidad ultrasuave con un diseño divertido. Las rayas teñidas en hilo garantizan un ambiente colorido duradero durante años de lavado y uso. Elige y diseña la camiseta de manga corta Vans Mirada Multistripe y haz alarde de tu gusto ecléctico.",
		precio: 40.0,
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
					codigosHex: ["#ECB159", "#000000"],
					nombres: ["cafe", "negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/V8SWCBU_a1?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Old Skool",
		marca: "vans",
		descripcion:
			"Mejora tu look con Vans Old Skool. Lanzadas en 1977, estas icónicas zapatillas debutaron con las ahora famosas Vans Sidestripe. El primer modelo de Vans que utiliza paneles de cuero/gamuza para mayor durabilidad y estilo, estas siluetas te mantienen cómodo y seguro desde la pista hasta la calle. La clásica suela Waffle vulcanizada de estas siluetas ofrece un excelente agarre dentro o fuera de la tabla y un estilo sencillo.",
		precio: 75.0,
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
					codigosHex: ["#ffffff", "#000000"],
					nombres: ["blanco", "negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/A38G1NQR_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A38G1NQR_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A38G1NQR_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#00ff00", "#ffffff"],
					nombres: ["verde", "blanco"]
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
					"https://images.footlocker.com/is/image/EBFL2/A38G1RIQ_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A38G1RIQ_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A38G1RIQ_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Sk8 Hi",
		marca: "vans",
		descripcion:
			"Estas zapatillas Vans Sk8-Hi con forro polar ofrecen un estilo sencillo y calidez durante todo el día con algunas actualizaciones del diseño legendario para el clima frío. A la altura de las expectativas, estas zapatillas incluyen una parte superior de ante Wolverine duradera que viene pretratada con Scotchgard resistente a la intemperie para los meses de invierno y la brisa fresca. Los tradicionales cuellos acolchados están forrados con un suave tejido polar para mayor calidez contra los elementos, y las suelas tipo waffle originales de Vans se diseñaron pensando en el agarre y el control. La durabilidad en forma de costuras estratégicas y una construcción de tela reforzada de una sola pieza, junto con cordones de cordón duraderos, completan estos clásicos actualizados para tus días de clima fresco.",
		precio: 75.0,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/00D5IBKA_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/00D5IBKA_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/00D5IBKA_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/00D5IBKA_a4?wid=565&hei=565&fmt=png-alpha"
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
					"https://images.footlocker.com/is/image/EBFL2/A7Q5NF3X_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A7Q5NF3X_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A7Q5NF3X_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A7Q5NF3X_a4?wid=565&hei=565&fmt=png-alpha"
				]
			},
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
					"https://images.footlocker.com/is/image/EBFL2/A2XSBODJ_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A2XSBODJ_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A2XSBODJ_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A2XSBODJ_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Authentic",
		marca: "vans",
		descripcion:
			"En 1966, cuando Vans todavía era una marca incipiente, se arriesgaron y lanzaron su primer zapato: el Estilo #44. Este diseño fue el primero en proteger realmente a los patinadores mientras perfeccionaban sus habilidades a bordo. Ese zapato ha persistido a través del tiempo como uno de los modelos más vendidos de Vans y hoy en día se lo conoce con orgullo como Vans Authentic. Si bien esta versión moderna presenta muchos de los elementos de diseño clásicos de su antecesor, se ha actualizado completamente con nuevas tecnologías para mantener tus pies más seguros que nunca.",
		precio: 55.0,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
					"https://images.footlocker.com/is/image/EBFL2/6233067_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6233067_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6233067_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/6233067_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Knu Skool",
		marca: "vans",
		descripcion:
			"¡La leyenda esta de vuelta! Más audaces y brillantes que nunca, Vans Knu Skool presenta un gran regreso. Familiares pero siempre frescas, estas zapatillas le dan un toque moderno a lo que más te gusta del clásico de los 90. Remasterizadas para reescribir la narrativa para pioneros como tú, estas siluetas vienen con una franja lateral hinchada moldeada en 3D, detalles de estilo dramáticos y cordones gruesos.",
		precio: 80.0,
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
					codigosHex: ["#ECB159"],
					nombres: ["cafe"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					"https://images.footlocker.com/is/image/EBFL2/N09QC5QJ_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N09QC5QJ_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N09QC5QJ_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N09QC5QJ_04?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
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
						stock: 15
					},
					{
						talla: "8.5",
						stock: 20
					},
					{
						talla: "9.0",
						stock: 15
					},
					{
						talla: "9.5",
						stock: 15
					},
					{
						talla: "10.0",
						stock: 15
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
					"https://images.footlocker.com/is/image/EBFL2/N09QCBKA_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N09QCBKA_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/N09QCBKA_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans Classic Slip On",
		marca: "vans",
		descripcion:
			"El Vans Classic Slip-On es uno de los modelos más icónicos de la famosa marca de zapatillas de skate de California. Limpio, sencillo, cómodo y, por supuesto, fácil de poner, el Slip-On ofrece un estilo versátil y sin esfuerzo. Su característico diseño sin cordones le da un aspecto relajado y atemporal, mientras que la construcción de lona lo hace liviano, transpirable y duradero. La parte superior de perfil bajo se asienta sobre la suela vulcanizada clásica de Vans con una suela exterior de goma con diseño tipo gofre para un máximo agarre dentro o fuera de la tabla. El reconocible Slip-On es sin duda la combinación de colores del tablero de ajedrez, que ha sido inmortalizado en la pantalla grande, en el escenario de los conciertos y en las calles desde su lanzamiento por primera vez en la década de 1970.",
		precio: 60.0,
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
					codigosHex: ["#ffffff", "#000000"],
					nombres: ["blanco", "negro"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					"https://images.footlocker.com/is/image/EBFL2/0011999_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/0011999_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/0011999_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					"https://images.footlocker.com/is/image/EBFL2/0011299_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/0011299_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/0011299_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/0011299_04?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Run Star Motion",
		marca: "converse",
		descripcion:
			"¡Sé audaz y atrevido, tanto dentro como fuera de la cancha! Dispara a las estrellas y apunta a un tiro ganador en el Converse Run Star Motion. Fabricados en colaboración con la estrella del baloncesto de la NBA Shai Gilgeous-Alexander, estos zapatos presentan un logotipo de Gilgeous-Alexander en la lengüeta con un estampado de silicona que representa sin disculpas su amor y pasión por el juego.La entresuela de espuma CX con rayas esculpidas en relieve te prepara para una zancada amortiguada, mientras que la parte superior de lona de algodón 100% orgánico ofrece una apariencia pulida y comodidad sostenible. Experimenta un estilo audaz y exagerado y una postura elevada en las calles y los pisos de madera con las Converse Run Star Motion.",
		precio: 80.0,
		oferta: {
			offActiva: true,
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
					codigosHex: ["#EFBC9B"],
					nombres: ["beige"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A04334C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04334C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04334C_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04334C_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse All Star BB Prototype",
		marca: "converse",
		descripcion:
			"La simplicidad es la máxima sofisticación, y el Converse All Star BB Prototype es un claro ejemplo de ello. Impulsadas con una parte superior de materiales mixtos, estas zapatillas de deporte guían tus pasos con una excelente estabilidad y te ayudan a dejar tu huella dondequiera que vayas. Conocidas por su facilidad y comodidad clásica, las Converse All Star BB Prototype te permiten jugar, practicar y recorrer cada sendero con estilo.",
		precio: 120.0,
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
					codigosHex: ["#0000ff"],
					nombres: ["azul"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A04332C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04332C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04332C_a3?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A03697C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03697C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A03697C_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Weapon Mid",
		marca: "converse",
		descripcion:
			"¡Aprobado por la junta y el tribunal! Átate las Converse Weapon Mid para montar la revolución y luchar por la excelencia. Inmersas en la nostalgia y repletas de elementos tradicionales, estas siluetas rinden homenaje a las siempre tan populares zapatillas de baloncesto y skate de los años 90. Dando un nuevo giro a los detalles clásicos, estos zapatos garantizan que cada movimiento que hagas sea una obra maestra. Una parte superior de cuero en colores retro ofrece el estilo característico de Weapon que te encanta y la durabilidad que anhelas, lo que la convierte en un elemento básico imprescindible en tu rotación. Estas siluetas, que añaden un toque característico que trasciende las tendencias, cuentan con una icónica etiqueta tejida All-Star en la lengüeta que garantiza que tus looks cotidianos sean nada menos que icónicos. Con un estilo poco convencional, el Converse Weapon Mid te permite alcanzar la grandeza con facilidad y confianza.",
		precio: 100.0,
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
					codigosHex: ["#000000", "#ffffff"],
					nombres: ["negro", "blanco"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A04400C_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04400C_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04400C_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A04400C_04?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Alt Star High Meta Noir",
		marca: "converse",
		descripcion:
			"No es tu par de Chucks normal y corriente. Ingrese a una nueva dimensión de la moda clásica de Converse con las Converse Alt Star High MN. Diseñadas para mantenerte cómodo en negro, estas zapatillas están salpicadas de detalles icónicos como el parche tonal Chuck Taylor All Star y una bandera de Converse para brindar el estilo más icónico de todos los tiempos. La frase 'FAR FROM A CHUCK' alrededor de la entresuela hace eco del diseño futurista y de tu amor por romper límites. Establece nuevos estándares de moda y crea una apariencia verdaderamente única con las Converse Alt Star High MN.",
		precio: 80.0,
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
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/A07666C_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A07666C_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A07666C_a3?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/A07666C_a4?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Space Jam T-Shirt",
		marca: "converse",
		descripcion:
			"Consigue un look 'Lemony Fresh' con la camiseta Converse Space Jam. Confeccionada con tejido de punto de algodón, esta camiseta lista para la cancha luce un gráfico impreso digitalmente del querido Demonio de Tasmania y el logotipo de Converse con una pelota de baloncesto bordada directamente. Terminada con un logotipo Tune Squad impreso digitalmente en la parte exterior del cuello y una etiqueta Star Chevron Flag en la costura lateral izquierda, esta camiseta eleva cada look con un toque de frescura nostálgica.",
		precio: 20.0,
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
					"https://images.footlocker.com/is/image/EBFL2/23071A01_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/23071A01_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Converse Chase The Drip Shai Hoodie",
		marca: "converse",
		descripcion:
			"¡Se trata de Shai Gilgeous-Alexander y su envidiable goteo! Con una ejecución estampada en relieve en 'SGA' y su hashtag en estampado brillante 'Don't mind my goteo', la sudadera con capucha Converse Chase The Drip Shai extiende una capa cálida, acogedora y de ajuste clásico. Póntelo para lograr un estilo urbano para el día.",
		precio: 65.0,
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
						stock: 45
					},
					{
						talla: "L",
						stock: 45
					},
					{
						talla: "M",
						stock: 45
					},
					{
						talla: "XL",
						stock: 45
					},
					{
						talla: "XXL",
						stock: 45
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/23453A01_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/23453A01_a2?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Stella McCartney Earthlight 2.0",
		marca: "adidas",
		descripcion:
			"Escapa de lo ordinario y encuentra la libertad en los senderos y las calles con adidas Stella McCartney Earthlight 2.0. Diseñados para ayudarte a conectarte con el suelo de más de una manera, estos corredores veganos están hechos con al menos un 20 % de materiales renovables para convertir cada día en el Día de la Tierra. La tecnología ENERGYRODS 2.0 devuelve energía con cada paso a medida que recorre kilómetros, mientras que la parte superior textil mínima ofrece un ajuste que se siente como si hubiera estado usando estos zapatos durante años. ¿El resultado? Un par de zapatillas para correr que te ayudan a correr desde la carretera hasta el sendero sin perder el ritmo.",
		precio: 280.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "femenina",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#FF71CD"],
					nombres: ["rosado"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/IF8057_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF8057_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF8057_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF8057_04?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#ffffff"],
					nombres: ["blanco"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/IF8058_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF8058_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF8058_03?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/IF8058_04?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "adidas Ultraboost DNA",
		marca: "adidas",
		descripcion:
			"Da un paso audaz con el adidas Ultraboost DNA. Con un diseño sin costuras, estas siluetas brindan una sensación de comodidad y un ajuste ceñido. Diseñados para tus aventuras diarias, estos zapatos garantizan un estilo versátil con una sensación relajada.",
		precio: 190.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: false,
		categoria: "adultos",
		genero: "femenina",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#0000ff"],
					nombres: ["azul"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/ID9633_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/ID9633_02?wid=565&hei=565&fmt=png-alpha"
				]
			},
			{
				colores: {
					codigosHex: ["#000000"],
					nombres: ["negro"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/GV8743_a1?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/GV8743_a2?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/GV8743_a3?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	},
	{
		nombre: "Vans FU Sport Low Felicidade",
		marca: "vans",
		descripcion:
			"¡Mantente en movimiento con Vans! A la altura de las expectativas, las Vans FU Sport Low Felicidade te permiten ser dueño de cada pago por el que caminas. Atemporales, originales e inspirados en la calle, estos zapatos están impulsados ​​por una construcción vulcanizada que te permite dar patadas para llegar a la cima. Todo menos ordinario, el Vans FU Sport Low Felicidade te permite emprender tu viaje y caminar con confianza.",
		precio: 70.0,
		oferta: {
			offActiva: false,
			Descuento: 0
		},
		activo: true,
		productoNuevo: true,
		categoria: "adultos",
		genero: "femenina",
		subcategoria: "zapatos",
		opciones: [
			{
				colores: {
					codigosHex: ["#EFBC9B"],
					nombres: ["beige"]
				},
				tallas: [
					{
						talla: "5.0",
						stock: 15
					},
					{
						talla: "5.5",
						stock: 15
					},
					{
						talla: "6.0",
						stock: 15
					},
					{
						talla: "6.5",
						stock: 15
					},
					{
						talla: "7.0",
						stock: 15
					},
					{
						talla: "7.5",
						stock: 15
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
					},
					{
						talla: "11.5",
						stock: 20
					},
					{
						talla: "12.0",
						stock: 20
					}
				],
				imagenes: [
					"https://images.footlocker.com/is/image/EBFL2/V0CQRCCZ_01?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/V0CQRCCZ_02?wid=565&hei=565&fmt=png-alpha",
					"https://images.footlocker.com/is/image/EBFL2/V0CQRCCZ_04?wid=565&hei=565&fmt=png-alpha"
				]
			}
		]
	}
];

module.exports = productos;
