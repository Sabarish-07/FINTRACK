from django.contrib import admin
from .models import IncomeCategory,ExpenseCategory,Income,Expense,Account

# Register your models here.
admin.site.register(IncomeCategory)
admin.site.register(ExpenseCategory)


class IncomeAdmin(admin.ModelAdmin):
    list_display = ['user','name','date','amount','category','note']
    search_fields = ('user','name', 'category')
    list_filter = ('user','category','date')
admin.site.register(Income, IncomeAdmin)


class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['user','name','date','amount','category','note']
    search_fields = ('user','name', 'category')
    list_filter = ('user','category','date')
admin.site.register(Expense, ExpenseAdmin)


class AccountAdmin(admin.ModelAdmin):
    list_display = ['user','name','balance']
admin.site.register(Account, AccountAdmin)