# Generated by Django 3.0.4 on 2020-03-19 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientprofile', '0004_clientprofile_newprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientprofile',
            name='address2',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
