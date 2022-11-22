{ pkgs }: {
	deps = [
		pkgs.sudo
    pkgs.nodejs-16_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
    pkgs.xorg.libX11
    pkgs.xorg.libX11.dev
	];
}