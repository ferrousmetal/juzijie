from yunpian_python_sdk.model import constant as YC
from yunpian_python_sdk.ypclient import YunpianClient
import urllib.parse

# 初始化client, apikey作为所有请求的默认值
client = YunpianClient(apikey='da02044586e93eeaeeb0d345ab13ca62')
code = '123213'
tpl_value = urllib.parse.urlencode({'#code#': code})  # 注意此处不要用sdk中的解码方法，超级傻逼
# code 和 app是你模版里面的变量，我们使用py3的urllib.parse.urlencode方法对此参数进行转码，注意在｛｝中，需要在模版变量前后加上#，不然会返回参数不正确
param = {YC.MOBILE: '手机号', YC.TPL_ID: 模版ID(long型), YC.TPL_VALUE: tpl_value}
r = client.sms().tpl_single_send(param)
print(r.msg())
