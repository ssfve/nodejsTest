var gameInfo = {
	name : "卡卡颂",
	expansList : [
		{
			name : "基础",
			attribUnique : true,
			items : ["基础版","河流1", "河流2", "命运之轮", "伯爵"],
		},
		{
			name : "扩展",
			items : ["商人","市长", "火龙", "高塔"],
		},
	],
	minPlayers : 2,
	maxPlayers : 6,
	rule : {
		context : [
			{
				title : "简介",
				context : [
					{
						title : "背景",
						context : [
							"玩家作为xxx，要xxxx，最后xxxxx",
							"整个过程中",
						],
					},
					"123456"
				],
			},
			{
				title : "设置",
				context : [
					{
						title : "配件说明",
						context : [
							"xx是钱币",
							"xx是版图",
						],
					},
					"其他说明"
				],
			},			
		],
	},
}

module.exports = gameInfo;
