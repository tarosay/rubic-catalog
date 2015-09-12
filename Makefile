
PATCH_NO_SOURCE = echo -e "\n.view-source { display: none; }" >> $(firstword $(wildcard $(dir $@)/styles-*.css))

PERIDOT/index.html: \
	$(addprefix src/,base.js serial.js spimaster.js servo.js i2cmaster.js gpio.js peridot.js peridot.json)
	jsduck --output=$(dir $@) --title="PERIDOT olive API documentation" \
		$(addprefix --categories=,$(filter %.json,$^)) \
		-- $(filter %.js,$^)
	$(PATCH_NO_SOURCE)

