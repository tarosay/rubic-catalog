
TARGETS = PERIDOT

entries = $(addsuffix /index.html,$(TARGETS))

.PHONY: all
all: $(entries)

.PHONY: all
clean:
	rm -f $(entries)

PERIDOT/index.html: \
	$(addprefix src/,base.js serial.js spimaster.js servo.js \
		i2cmaster.js gpio.js peridot.js pfc.js \
		peridot.json tags.rb)
	jsduck --output=$(dir $@) --no-source \
		--title="PERIDOT olive API documentation" \
		$(addprefix --tags=,$(filter %.rb,$^)) \
		$(addprefix --categories=,$(filter %.json,$^)) \
		-- $(filter %.js,$^)

