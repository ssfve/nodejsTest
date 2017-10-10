var gameGuide = {
	entry : "入口",

	入口 : {
		showString : "测试入口",
		next : {
			"游戏推荐" : "列表",
			"规则引导" : "规则",
		},
	},

	列表 : {
		showString : "有几个人",
		next : {
			"一个人" : "单人",
			"两个人" : "双人",
			"三到六个人" : "电力网络",
			"七人及以上" : "一夜狼人",
		}
	},

	单人 : {
		showString : "难度",
		next : {
			"简单" : "口袋僵尸",
			"困难" : "洞穴农夫",
		}
	},

	双人 : {
		showString : "喜欢的类型",
		next : {
			"卡牌" : "万智牌",
			"棋类" : "昆虫棋",
		}
	},

	电力网络 : {
		showString : "推荐 电力网络",
		link : "http://boardgamegeek.com/boardgame/2651/power-grid",
	},

	一夜狼人 : {
		showString : "推荐 一夜狼人",
		link : "http://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf",
	},

	口袋僵尸 : {
		showString : "推荐 口袋僵尸",
		link : "http://boardgamegeek.com/boardgame/463/magic-gathering",
	},

	洞穴农夫 : {
		showString : "推荐 洞穴农夫",
		link : "http://boardgamegeek.com/boardgame/102794/caverna-cave-farmers",
	},

	万智牌 : {
		showString : "推荐 万智牌",
		link : "http://boardgamegeek.com/boardgame/463/magic-gathering",
	},

	昆虫棋 : {
		showString : "推荐 昆虫棋",
		link : "http://boardgamegeek.com/boardgame/2655/hive",
	},

	规则 : {
		showString : "放置版图，将角色指示物放置到顺位条",
		alert : {
			"顺位条是哪个？" : "版图右上角有数字的格子",
		},
		next : {
			"下一步" : "分钱",
		},
	},

	分钱 : {
		showString : "每位玩家获得50电子币",
		alert : {
			"电子币是什么？" : "游戏中的货币单位，纸币形式",
		},
		next : {
			"下一步" : "拍卖",
		},
	},

	拍卖 : {
		showString : "按照顺位主持拍卖",
		next : {
			"下一步" : "结算",
		},
	},

	结算 : {
		showString : "剩余电子币最多的玩家获胜",
		home : "1",
	},
}

module.exports = gameGuide;
