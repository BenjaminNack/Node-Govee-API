# Node Govee API Documentation
---
```typescript
initDevice(key, macaddress, deviceModel)
```
> Store the required information to control the light (Sidenote: As of now there is no way to have multiple lights other than reimporting the library multiple times)
---
```typescript
control.setOn(on : boolean)
```
> Turn the light on or off
---
```typescript
control.setBrightness(brightness : number)
```
> Set the brightness of the light from 0 to 100
---
```typescript
control.setColor(r : number, g : number, b : number)
```
> Set the color of the light with rgb values, each component is 0-255
---
```typescript
control.setColorTemperature(temperature : number)
```
> Set the color temperature of the light in kelvin
---
```typescript
status.getDeviceStatus()
```
> Returns a promise that when resolves provides the current status of the light with paramerters such as wether it's switched on, it's color and more. **See govee documentation that you have received with your api key for more information**.
---