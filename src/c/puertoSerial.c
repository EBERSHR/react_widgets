void setup() {
  Serial.begin(9600);
  Serial.println("Inicializando la comuicación...");
}

void loop() {
  while(Serial.available() > 0)  {
    Serial.println(Serial.readString() +  "un gato montez.");
    }
    delay(500);
}