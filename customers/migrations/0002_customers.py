# Generated by Django 4.0.6 on 2022-07-19 10:02

from django.db import migrations

def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(first_name="Alba", last_name="Ramos", email="alba.ramos@email.com", language= "EN").save()

class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
