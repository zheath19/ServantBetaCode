
import RPi.GPIO as GPIO
from time import sleep

PWMPin = 12            # PWM pin connected to LED

rightCTL = 16

GPIO.setwarnings(False)         #disable warnings
GPIO.setmode(GPIO.BOARD)        #set pin numbering system
GPIO.setup(PWMPin,GPIO.OUT)

GPIO.setup(rightCTL, GPIO.OUT)
GPIO.output(rightCTL, GPIO.HIGH)

GPIO.setup(PWMPin, GPIO.OUT)
GPIO.output(PWMPin, GPIO.HIGH)
sleep(1000)

#pi_pwm = GPIO.PWM(PWMPin,1000)      #create PWM instance with frequency
#pi_pwm.start(0)             #start PWM of required Duty Cycle 
#while True:
    #for duty in range(70,101,1):
        #pi_pwm.ChangeDutyCycle(duty) #provide duty cycle in the range 0-100
        #sleep(0.05)
    #sleep(0.5)
                 #
    #for duty in range(100,70,-1):
        #pi_pwm.ChangeDutyCycle(duty)
        ##sleep(0.05)
    #sleep(0.5)
                           
        
