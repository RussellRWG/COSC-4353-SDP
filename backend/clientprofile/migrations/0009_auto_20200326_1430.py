# Generated by Django 3.0.4 on 2020-03-26 19:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('clientprofile', '0008_auto_20200320_1348'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientprofile',
            name='username',
        ),
        migrations.AddField(
            model_name='clientprofile',
            name='user',
            field=models.OneToOneField(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]