
#include <LiquidCrystal_I2C.h>


LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x27 for a 16 chars and 2 line display
//try 0x27 address for LCD if not work otherwise find addres of LCD from backside of LCD  


// amanay zherawa nasandny zhmaray dewarakana 
// xoy deware kaml  5 danaya  rek full
// rightaka bas dewarakan lay rast neshan ada wabzanm du danay lay rasta
// leftakash dway lay chap neshan ada
#define SPRITE_TERRAIN_EMPTY ' '      

#define SPRITE_TERRAIN_SOLID 5

#define SPRITE_TERRAIN_SOLID_RIGHT 6

#define SPRITE_TERRAIN_SOLID_LEFT 7



// ama rek pin e joistkiakaka anasenen ka ba me7ware x esh akat
#define Joy_X_axis 2

#define Autostartpin 1

#define PIN_READWRITE 10

#define PIN_CONTRAST 12


#define SPRITE_RUN1 1

#define SPRITE_RUN2 2

#define SPRITE_JUMP 3

#define SPRITE_JUMP_UPPER '.'        
#define SPRITE_JUMP_LOWER 4


#define BOY_HORIZONTAL_POSITION 1     // تحديد المكان الذي سيظهر فيه الشخص على الشاشة

#define TERRAIN_WIDTH 16   // عرض التضاريس (عدد الأعمدة التي ستعرض على الشاشة)
#define TERRAIN_EMPTY 0
#define TERRAIN_LOWER_BLOCK 1
#define TERRAIN_UPPER_BLOCK 2

#define BOY_POSITION_OFF 0          // boy is invisible
#define BOY_POSITION_RUN_LOWER_1 1  // boy is running on lower row (pose 1)
#define BOY_POSITION_RUN_LOWER_2 2  //                              (pose 2)

#define BOY_POSITION_JUMP_1 3       // Starting a jump
#define BOY_POSITION_JUMP_2 4       // Half-way up
#define BOY_POSITION_JUMP_3 5       // Jump is on upper row
#define BOY_POSITION_JUMP_4 6       // Jump is on upper row
#define BOY_POSITION_JUMP_5 7       // Jump is on upper row
#define BOY_POSITION_JUMP_6 8       // Jump is on upper row
#define BOY_POSITION_JUMP_7 9       // Half-way down
#define BOY_POSITION_JUMP_8 10      // About to land

#define BOY_POSITION_RUN_UPPER_1 11 // boy is running on upper row (pose 1)
#define BOY_POSITION_RUN_UPPER_2 12 //     
                         (pose 2)
//مصفوفة تمثل التضاريس في الصف العلوي.
//amanay zherawa bo danana yan xazn krdny dewarakana la bashe xwarawa w sarawa
static char terrainUpper[TERRAIN_WIDTH + 1]; 
//مصفوفة تمثل التضاريس في الصف العلوي.
// ama har ba nawakay dyara upper ama dewar la sarawa drust aka



static char terrainLower[TERRAIN_WIDTH + 1];
//مصفوفة تمثل التضاريس في الصف السفلي
// ama dewar  la xwarawa drust aka



static bool buttonPushed = false;//علم يحدد إذا كان قد تم الضغط على الزر أم لا.



// la regay am functionawa hamu shtek lasar shashaka drust akre waku dewarakan u  nafaraka ka yare akat
void initializeGraphics(){

  static byte graphics[] = {
    B01100, B01100, B00000, B01110, B11100, B01100, B11010, B10011, // شخص يركض
    B01100, B01100, B00000, B01100, B01100, B01100, B01100, B01110, // شخص يقفز
    B01100, B01100, B00000, B11110, B01101, B11111, B10000, B00000, // القفز للأسفل
    B11110, B01101, B11111, B10000, B00000, B00000, B00000, B00000, // الأرض
    B11111, B11111, B11111, B11111, B11111, B11111, B11111, B11111, // الأرض اليمنى
    B00011, B00011, B00011, B00011, B00011, B00011, B00011, B00011, // الأرض اليسرى
    B11000, B11000, B11000, B11000, B11000, B11000, B11000, B11000, // كتل علوية
  };

  int i;//يتم تعريف متغير i الذي سيتم استخدامه في الحلقات.




//تُحمل الأشكال المرسومة إلى ذاكرة الشاشة LCD.
// ama  harche shkle ka la sarawa drust man krd  ay gwazetawa bo zakeray lcd yaka wata neshany ada
//
  for (i = 0; i < 7; ++i) {
lcd.createChar(i + 1, &graphics[i * 8]);
  }
//lcd.createChar(i + 1, &graphics[i * 8]);


  // /تُهيئ التضاريس لتكون فارغة عند بداية اللعبة.
// ama bo awaya ka la saratawa ka yare dast pe aka hech dewarek bune nabe wata 3arzaka batal be babe blokakan
  for (i = 0; i < TERRAIN_WIDTH; ++i) {
    terrainUpper[i] = SPRITE_TERRAIN_EMPTY;// ama trian upper  haten empty daman na wta la sarataya dewarakan sarawa batal bn dewar nabe
    terrainLower[i] = SPRITE_TERRAIN_EMPTY;// amash haman shta bas bo dewarakan 3arz 
  }
}

// Slide the terrain to the left in half-character increments
//هذه الدالة تقوم بتحريك الأرض أو المسار إلى اليسار وتحديثه:

void advanceTerrain(char* terrain, byte newTerrain){
  for (int i = 0; i < TERRAIN_WIDTH; ++i) {
    char current = terrain[i]; //أخذ القيمة الحالية من التضاريس (التي يمكن أن تكون فارغة أو كتلة صلبة أو حافة).
    char next = (i == TERRAIN_WIDTH-1) ? newTerrain : terrain[i+1];// إذا كان العمود الحالي هو آخر عمود في التضاريس، نستخدم newTerrain، وإلا نأخذ العمود التالي.
    switch (current){

      //
      
      case SPRITE_TERRAIN_EMPTY:   
        terrain[i] = (next == SPRITE_TERRAIN_SOLID) ? SPRITE_TERRAIN_SOLID_RIGHT : SPRITE_TERRAIN_EMPTY;
        break;
      case SPRITE_TERRAIN_SOLID:
        terrain[i] = (next == SPRITE_TERRAIN_EMPTY) ? SPRITE_TERRAIN_SOLID_LEFT : SPRITE_TERRAIN_SOLID;
        break;
      case SPRITE_TERRAIN_SOLID_RIGHT:
        terrain[i] = SPRITE_TERRAIN_SOLID;
        break;
      case SPRITE_TERRAIN_SOLID_LEFT:
        terrain[i] = SPRITE_TERRAIN_EMPTY;
        break;
    }
  }
}
//drawBoy(): هذه الدالة تتحكم في حركة الشخصية (الولد).
//بعض الحالات في switch:
//case SPRITE_TERRAIN_EMPTY::

إذا كان العنصر الحالي هو SPRITE_TERRAIN_EMPTY، نغيره إلى SPRITE_TERRAIN_SOLID_RIGHT أو نتركه فارغًا حسب العنصر التالي.
//case SPRITE_TERRAIN_SOLID::

إذا كان العنصر الحالي هو SPRITE_TERRAIN_SOLID، نغيره إلى SPRITE_TERRAIN_SOLID_LEFT إذا كان العنصر التالي فارغًا، أو نتركه كما هو.
case SPRITE_TERRAIN_SOLID_RIGHT::

إذا كان العنصر الحالي هو SPRITE_TERRAIN_SOLID_RIGHT، نغيره إلى SPRITE_TERRAIN_EMPTY (نقوم بإزالته).
case SPRITE_TERRAIN_SOLID_LEFT::

إذا كان العنصر الحالي هو SPRITE_TERRAIN_SOLID_LEFT، نغيره إلى SPRITE_TERRAIN_EMPTY (نقوم بإزالته).
bool drawBoy(byte position, char* terrainUpper, char* terrainLower, unsigned int score) {
  bool collide = false;
  char upperSave = terrainUpper[BOY_HORIZONTAL_POSITION];
  char lowerSave = terrainLower[BOY_HORIZONTAL_POSITION];
  byte upper, lower;
  switch (position) {
    case BOY_POSITION_OFF:
      upper = lower = SPRITE_TERRAIN_EMPTY;
      break;
    case BOY_POSITION_RUN_LOWER_1:
      upper = SPRITE_TERRAIN_EMPTY;
      lower = SPRITE_RUN1;
      break;
    case BOY_POSITION_RUN_LOWER_2:
      upper = SPRITE_TERRAIN_EMPTY;
      lower = SPRITE_RUN2;
      break;
    case BOY_POSITION_JUMP_1:
    case BOY_POSITION_JUMP_8:
      upper = SPRITE_TERRAIN_EMPTY;
      lower = SPRITE_JUMP;
      break;
    case BOY_POSITION_JUMP_2:
    case BOY_POSITION_JUMP_7:
      upper = SPRITE_JUMP_UPPER;
      lower = SPRITE_JUMP_LOWER;
      break;
    case BOY_POSITION_JUMP_3:
    case BOY_POSITION_JUMP_4:
    case BOY_POSITION_JUMP_5:
    case BOY_POSITION_JUMP_6:
      upper = SPRITE_JUMP;
      lower = SPRITE_TERRAIN_EMPTY;
      break;
    case BOY_POSITION_RUN_UPPER_1:
      upper = SPRITE_RUN1;
      lower = SPRITE_TERRAIN_EMPTY;
      break;
    case BOY_POSITION_RUN_UPPER_2:
      upper = SPRITE_RUN2;
      lower = SPRITE_TERRAIN_EMPTY;
      break;
  }
  if (upper != ' ') {
    terrainUpper[BOY_HORIZONTAL_POSITION] = upper;
    collide = (upperSave == SPRITE_TERRAIN_EMPTY) ? false : true;
  }
  if (lower != ' ') {
    terrainLower[BOY_HORIZONTAL_POSITION] = lower;
    collide |= (lowerSave == SPRITE_TERRAIN_EMPTY) ? false : true;
  }
  
  byte digits = (score > 9999) ? 5 : (score > 999) ? 4 : (score > 99) ? 3 : (score > 9) ? 2 : 1;
  
  // Draw the scene
  terrainUpper[TERRAIN_WIDTH] = '\0';
  terrainLower[TERRAIN_WIDTH] = '\0';
  char temp = terrainUpper[16-digits];
  terrainUpper[16-digits] = '\0';
  lcd.setCursor(0,0);
  lcd.print(terrainUpper);
  terrainUpper[16-digits] = temp;  
  lcd.setCursor(0,1);
  lcd.print(terrainLower);
  
  lcd.setCursor(16 - digits,0);
  lcd.print(score);

  terrainUpper[BOY_HORIZONTAL_POSITION] = upperSave;
  terrainLower[BOY_HORIZONTAL_POSITION] = lowerSave;
  return collide;
}

// Handle the button push as an interrupt
void buttonPush() {
  buttonPushed = true;
}

void setup(){
  pinMode(PIN_READWRITE, OUTPUT);
  digitalWrite(PIN_READWRITE, LOW);
  pinMode(PIN_CONTRAST, OUTPUT);
  digitalWrite(PIN_CONTRAST, LOW);
  pinMode(Joy_X_axis, INPUT);
  digitalWrite(Joy_X_axis, HIGH);
  pinMode(Autostartpin, OUTPUT);
  digitalWrite(Autostartpin, HIGH);
  lcd.init();                      // initialize the lcd 
  lcd.init();
  // Print a message to the LCD.
  lcd.backlight();
  // Digital pin 2 maps to interrupt 0
  attachInterrupt(0/*PIN_BUTTON*/, buttonPush, FALLING);
  
  initializeGraphics();
  
  lcd.begin(16, 2);
}

void loop() {
  static byte boyPos = BOY_POSITION_RUN_LOWER_1;
  static byte newTerrainType = TERRAIN_EMPTY;
  static byte newTerrainDuration = 1;
  static bool playing = false;
  static bool blink = false;
  static unsigned int distance = 0;
  
  if (!playing) {
    drawBoy((blink) ? BOY_POSITION_OFF : boyPos, terrainUpper, terrainLower, distance >> 3);
    if (blink) {
      lcd.setCursor(0, 0);
      lcd.print("Push to Start");
      
    }
    delay(250);
    blink = !blink;
    if (buttonPushed) {
      initializeGraphics();
      boyPos = BOY_POSITION_RUN_LOWER_1;
      playing = true;
      buttonPushed = false;
      distance = 0;
    }
    return;
  }

  // Shift the terrain to the left
  advanceTerrain(terrainLower, newTerrainType == TERRAIN_LOWER_BLOCK ? SPRITE_TERRAIN_SOLID : SPRITE_TERRAIN_EMPTY);
  advanceTerrain(terrainUpper, newTerrainType == TERRAIN_UPPER_BLOCK ? SPRITE_TERRAIN_SOLID : SPRITE_TERRAIN_EMPTY);
  
  // Make new terrain to enter on the right
  if (--newTerrainDuration == 0) {
    if (newTerrainType == TERRAIN_EMPTY) {
      newTerrainType = (random(3) == 0) ? TERRAIN_UPPER_BLOCK : TERRAIN_LOWER_BLOCK;
      newTerrainDuration = 2 + random(10);
    } else {
      newTerrainType = TERRAIN_EMPTY;
      newTerrainDuration = 10 + random(10);
    }
  }
    
  if (buttonPushed) {
    if (boyPos <= BOY_POSITION_RUN_LOWER_2) boyPos = BOY_POSITION_JUMP_1;
    buttonPushed = false;
  }  

  if (drawBoy(boyPos, terrainUpper, terrainLower, distance >> 3)) {
    playing = false; // The boy collided with something. Too bad.
  } else {
    if (boyPos == BOY_POSITION_RUN_LOWER_2 || boyPos == BOY_POSITION_JUMP_8) {
      boyPos = BOY_POSITION_RUN_LOWER_1;
    } else if ((boyPos >= BOY_POSITION_JUMP_3 && boyPos <= BOY_POSITION_JUMP_5) && terrainLower[BOY_HORIZONTAL_POSITION] != SPRITE_TERRAIN_EMPTY) {
      boyPos = BOY_POSITION_RUN_UPPER_1;
    } else if (boyPos >= BOY_POSITION_RUN_UPPER_1 && terrainLower[BOY_HORIZONTAL_POSITION] == SPRITE_TERRAIN_EMPTY) {
      boyPos = BOY_POSITION_JUMP_5;
    } else if (boyPos == BOY_POSITION_RUN_UPPER_2) {
      boyPos = BOY_POSITION_RUN_UPPER_1;
    } else {
      ++boyPos;
    }
    ++distance;
    
    digitalWrite(Autostartpin, terrainLower[BOY_HORIZONTAL_POSITION + 2] == SPRITE_TERRAIN_EMPTY ? HIGH : LOW);
  }

  // Increase speed after every 10 points
  unsigned int speedDelay = 100 - (distance / 4);  // Reduce delay every 4 points
  // if (speedDelay < 20) {
  //   speedDelay = 20;  // Ensure the delay doesn't go below a certain threshold
  // }
  delay(speedDelay);
}



