<?
namespace x1\base;

class ConfigAsset extends \yii\web\AssetBundle
{
	public $sourcePath = '@x1/base/config';
	
	public $js         = [
		'config.js',
	];

	public $css        = [
	];

	public $depends = [
		// 'x1\assets\MomentAsset',
	];
}
?>