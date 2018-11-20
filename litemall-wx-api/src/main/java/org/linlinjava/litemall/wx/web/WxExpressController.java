package org.linlinjava.litemall.wx.web;

import org.linlinjava.litemall.core.express.ExpressService;
import org.linlinjava.litemall.core.express.dao.ExpressInfo;
import org.linlinjava.litemall.core.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/wx/express")
@Validated
public class WxExpressController {


	@Autowired
	private ExpressService expressService;
	
	@PostMapping("/query")
	public Object getExpressInfo(String expCode, String expNo) {
		ExpressInfo expressInfo = expressService.getExpressInfo(expCode, expNo);
		return ResponseUtil.ok(expressInfo);
	}
}
