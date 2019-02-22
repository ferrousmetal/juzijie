from django.db import models

# Create your models here.

class UserPrifileModel(models.Model):
    """
    用户信息表
    """
    phone=models.CharField(max_length=11,verbose_name='电话号码')
    isadmin=models.BooleanField(default=False, verbose_name="是否为管理员")

class XinZhengModel(models.Model):
    """
    信征报告
    """
    pass

