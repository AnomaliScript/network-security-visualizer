# networkSecurityVisualizer

This project was made to be a "sandbox" in creating local networks in terms of cybersecurity to be a learning tool for my CyberPatriot Team.
The following is a mapping of what network devices can connect to which other network devices, which the sandbox is based off of.

## **Cybersecurity Network Device Map**

### **1. Router**
**Can wire to:**
- Modem
- Switch
- Firewall
- Server
- Desktop
- Laptop
- Printer
- Access Point
- The Internet (via modem)

**Can wirelessly connect to:**
- Laptop
- Smartphone
- Tablet
- Printer
- Smart TV
- Security Camera
- Smart Speaker

---

### **2. Switch**
**Can wire to:**
- Router
- Firewall
- Server
- Desktop
- Laptop
- Printer
- Access Point
- Another Switch (uplink/cascade)
- Security Camera (PoE capable)

**Can wirelessly connect to:**
- *Nothing* (switches are wired-only)

---

### **3. Access Point (AP)**
**Can wire to:**
- Router
- Switch
- Firewall

**Can wirelessly connect to:**
- Laptop
- Smartphone
- Tablet
- Printer
- Smart TV
- Security Camera
- Smart Speaker
- Desktop (if it has Wi-Fi adapter)

---

### **4. Modem**
**Can wire to:**
- Router
- Modem/Router Combo (N/A, they're alternatives)
- Firewall
- Desktop (direct connection, rare)
- The Internet (via ISP infrastructure)

**Can wirelessly connect to:**
- *Nothing* (modems are wired-only)

---

### **5. Modem/Router Combo (Gateway)**
**Can wire to:**
- Switch
- Firewall
- Server
- Desktop
- Laptop
- Printer
- Access Point
- The Internet (via ISP)

**Can wirelessly connect to:**
- Laptop
- Smartphone
- Tablet
- Printer
- Smart TV
- Security Camera
- Smart Speaker

---

### **6. Firewall**
**Can wire to:**
- Modem
- Router
- Switch
- Server
- Access Point
- The Internet (via modem/router)

**Can wirelessly connect to:**
- *Nothing* (firewalls are typically wired-only appliances)

---

### **7. Server**
**Can wire to:**
- Router
- Switch
- Firewall
- Desktop
- Laptop
- Another Server
- Printer

**Can wirelessly connect to:**
- Router (if server has Wi-Fi adapter, uncommon)
- Access Point (same caveat)

---

### **8. The Internet**
**Can wire to:**
- Modem
- Router
- Modem/Router Combo (Gateway)
- Firewall

**Can wirelessly connect to:**
- *Nothing directly* (the Internet is accessed through devices, not connected to)

---

### **9. Desktop Computer**
**Can wire to:**
- Router
- Switch
- Modem (rare, direct connection)
- Server
- Printer
- Another Desktop (direct Ethernet, rare)

**Can wirelessly connect to:**
- Router (with Wi-Fi adapter)
- Access Point
- Printer
- Smartphone (hotspot)

---

### **10. Laptop**
**Can wire to:**
- Router
- Switch
- Modem
- Server
- Printer

**Can wirelessly connect to:**
- Router
- Access Point
- Printer
- Smartphone (hotspot)
- Smart TV (casting)

---

### **11. Smartphone**
**Can wire to:**
- Router (via USB-to-Ethernet adapter, rare)
- Desktop/Laptop (USB tethering)

**Can wirelessly connect to:**
- Router
- Access Point
- Printer
- Smart TV
- Smart Speaker
- Another Smartphone (hotspot, Wi-Fi Direct)

---

### **12. Tablet**
**Can wire to:**
- Router (via USB-to-Ethernet adapter, rare)
- Desktop/Laptop (USB connection)

**Can wirelessly connect to:**
- Router
- Access Point
- Printer
- Smart TV
- Smart Speaker

---

### **13. Printer**
**Can wire to:**
- Router
- Switch
- Desktop
- Laptop
- Server

**Can wirelessly connect to:**
- Router
- Access Point
- Desktop (Wi-Fi Direct)
- Laptop
- Smartphone
- Tablet

---

### **14. Smart TV**
**Can wire to:**
- Router
- Switch

**Can wirelessly connect to:**
- Router
- Access Point
- Smartphone (casting)
- Laptop (casting)
- Tablet (casting)

---

### **15. Security Camera (IP Camera)**
**Can wire to:**
- Router
- Switch (often PoE - Power over Ethernet)
- Server (NVR - Network Video Recorder)

**Can wirelessly connect to:**
- Router
- Access Point

---

### **16. Smart Speaker**
**Can wire to:**
- Router (some models support Ethernet)

**Can wirelessly connect to:**
- Router
- Access Point
- Smartphone (Bluetooth/setup)
- Tablet (Bluetooth/setup)

---

## **Quick Notes:**
- **PoE (Power over Ethernet)**: Some devices like IP cameras and Access Points can receive power through the Ethernet cable from PoE-capable switches.
- **Direct connections**: Some wired connections (like Desktop-to-Desktop) are technically possible but extremely rare in practice.
- **Wi-Fi adapters**: Devices like desktops and servers can connect wirelessly if they have Wi-Fi adapters, but this is uncommon for stationary infrastructure.

---

Does this hit what you need, or do you want me to adjust anything?
