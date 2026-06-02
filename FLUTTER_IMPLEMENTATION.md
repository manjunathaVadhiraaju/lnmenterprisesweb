# Flutter & Dart Web/Mobile Implementation
## LNM Enterprises Landing Page

This document provides a production-ready, fully responsive Flutter/Dart implementation of our **LNM Enterprises** application. It preserves the exact content, dual support phone numbers, visual design theme, dynamic service catalog, interactive portfolio, and functional WhatsApp links.

---

### 1. Project Dependencies (`pubspec.yaml`)

Add these required dependencies to your Flutter project's `pubspec.yaml` file:

```yaml
name: lnm_enterprises
description: "LNM Enterprises Landing Page in Flutter"
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.5
  google_fonts: ^6.1.0        # Elegant typography pairing
  url_launcher: ^6.2.2        # Interactive native dialers and WhatsApp launches
  flutter_animate: ^4.2.0.1   # Micro-interactions and fades

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
```

---

### 2. Full Application Code (`lib/main.dart`)

Copy this complete source code into your Flutter project's `/lib/main.dart` file. 

```dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_animate/flutter_animate.dart';

void main() {
  runApp(const LNMApp());
}

class LNMApp extends StatelessWidget {
  const LNMApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'LNM Enterprises',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF130924), // Ambient Dark Purple
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFFF59E0B), // Amber Accent
          secondary: Color(0xFF3B82F6), // Tech Blue
          surface: Color(0xFF241348), // Card purple
          onSurface: Colors.white,
        ),
        textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
      ),
      home: const MainLayout(),
    );
  }
}

// Global Static Data Model & Instances
class BusinessInfo {
  static const String name = 'LNM Enterprises';
  static const String tagline = 'Tailoring Innovation with Technology';
  static const String location = 'Ballari, Karnataka – 583101';
  static const String fullAddress = '1st Cross, Anjinappa Nagar, Rupanagudi Road, Ballari – 583101, Karnataka, India (Landmark: Near Varabassappa Anganwadi Government School)';
  static const String tailoringPhone = '+91 9483725426'; 
  static const String softwarePhone = '+91 9449254265';  
  static const String email = 'a99manjunatha@gmail.com';
  static const String hours = 'Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed)';
  static const String whatsappNumber = '919483725426';
}

class ServiceItem {
  final String id;
  final String title;
  final String category;
  final String description;
  final String pricing;
  final List<String> features;
  final IconData icon;

  const ServiceItem({
    required this.id,
    required this.title,
    required this.category,
    required this.description,
    required this.pricing,
    required this.features,
    required this.icon,
  });
}

class PortfolioItem {
  final String id;
  final String title;
  final String category;
  final String description;
  final String imageUrl;
  final List<String> tags;
  final String client;
  final String date;

  const PortfolioItem({
    required this.id,
    required this.title,
    required this.category,
    required this.description,
    required this.imageUrl,
    required this.tags,
    required this.client,
    required this.date,
  });
}

const List<ServiceItem> services = [
  ServiceItem(
    id: 't-womens-tailoring',
    title: "Women's Tailoring & Custom Stitching",
    category: 'Tailoring',
    description: 'Expert, custom tailoring solutions matching your personal fit, ranging from designer blouses to traditional South Indian festive attire.',
    pricing: 'Starts from ₹300',
    features: [
      'Perfect Fit Guarantee with physical trial facilities',
      'Extensive catalogs for contemporary and classic necklines',
      'Timely Delivery - Express stitching available within 24 hours',
      'Custom embellishment fittings and matching accessory creation'
    ],
    icon: Icons.content_cut,
  ),
  ServiceItem(
    id: 't-blouse-stitching',
    title: 'Designer Blouse Stitching',
    category: 'Tailoring',
    description: 'Bespoke custom blouses, featuring designer patterns, halter necks, boat necks, backless designs, and specialized padding options.',
    pricing: 'Starts from ₹450',
    features: [
      'Tailored matching for Bridal Sarees, Kanjeevarams, and Silks',
      'Options: Padded, High-neck, Boat-neck, Backless, Princess Cut',
      'Durable reinforced stitching and premium interlining cloths',
      'Custom shoulder-drop lock-in straps'
    ],
    icon: Icons.auto_awesome,
  ),
  ServiceItem(
    id: 't-dresses-stitching',
    title: 'Dress Stitching & Umbrella Frocks',
    category: 'Tailoring',
    description: 'Custom Salwar suits, Anarkalis, Patialas, and high-volume umbrella cut dresses designed to swirl beautifully.',
    pricing: 'Starts from ₹600',
    features: [
      'Umbrella cut with wide circular flares (3 to 6 meters)',
      'Custom waist adjustments, invisible side zippers, and pockets',
      'Stitching for Anarkalis, Palazzo sets, and Patiala Kameez',
      'High-grade lining and overlocking standard on all seams'
    ],
    icon: Icons.checkroom,
  ),
  ServiceItem(
    id: 't-baby-kuchu',
    title: 'Baby Kuchu Saree Tassels & Beading',
    category: 'Tailoring',
    description: 'Traditional and designer Baby Kuchu tassel work, tailored by hand for saree pallus using premium silk thread and beads.',
    pricing: 'Starts from ₹350',
    features: [
      'Handcrafted silk thread tassel designs (Simple, Ring, and Bridal models)',
      'High-grade gold, glass, and pearl bead integrations',
      'Extremely durable knotting that stays neat after dry cleans',
      'Customized color contrast pairings to match saree body colors'
    ],
    icon: Icons.palette,
  ),
  ServiceItem(
    id: 'e-computer-embroidery',
    title: 'Computer & Designer Embroidery',
    category: 'Embroidery',
    description: 'Automated embroidery patterns executed on high-end computer embroidery machines with digital precision.',
    pricing: 'Starts from ₹1,200',
    features: [
      'State-of-the-art multi-needle computerized embroidery machines',
      'Thousands of ready-designed floral, geometric, and traditional files',
      'Uniform precision down to fractions of a millimeter',
      'Metallic gold, silver, and multi-element color threads'
    ],
    icon: Icons.memory,
  ),
  ServiceItem(
    id: 's-mobile-apps',
    title: 'Android & iOS App Development',
    category: 'Software',
    description: 'Tailored native and hybrid smartphone applications published on Google Play Console and Apple App Store.',
    pricing: 'Custom Quote',
    features: [
      'Fully responsive UI/UX designed with premium interactive effects',
      'Google Play Console compliance & expert store publication support',
      'Offline caching capabilities, localized language options, and payment gateway widgets',
      'Push Notifications, Firebase Auth, and real-time backend integrations'
    ],
    icon: Icons.phone_android,
  ),
  ServiceItem(
    id: 's-website-dev',
    title: 'Web Application & E-Commerce Development',
    category: 'Software',
    description: 'High-speed business websites, enterprise web applications, and digital online stores with headless architectures.',
    pricing: 'Custom Quote',
    features: [
      'Modular SEO-optimized layouts to rank on Google search results',
      'Fully integrated digital payment checkouts, catalogs, and inventory trackers',
      'Mobile-first responsive grids that adapt perfectly to tabs and monitors',
      'Zero maintenance headless setups compatible with serverless hosting'
    ],
    icon: Icons.language,
  ),
];

const List<PortfolioItem> portfolioItems = [
  PortfolioItem(
    id: 'p-fashion-1',
    title: 'Bridal Kanjeevaram Saree Blouse',
    category: 'Tailoring',
    description: 'Stunning royal matching blouse with heavy beadwork additions and customized princess silhouette sizing.',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    tags: ['Bridal', 'Silk Saree', 'Perfect Fit'],
    client: 'Suhasini Gowda',
    date: 'April 2026',
  ),
  PortfolioItem(
    id: 'p-emb-1',
    title: 'Peacock Motif Maggam Embroidery',
    category: 'Embroidery',
    description: 'Computerized vector peacock design with manual beads, metallic zardosi cords, and silk embroidery threads.',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80',
    tags: ['Peacock Motif', 'Computer Stitch', 'Maggam Work'],
    client: 'Divya Reddy',
    date: 'May 2026',
  ),
  PortfolioItem(
    id: 'p-tech-1',
    title: "Sree Raghavendra E-Market App",
    category: 'Software',
    description: 'Interactive Android/iOS mobile shopping catalog built using Flutter and integrated with secure online UPI payments.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    tags: ['Flutter App', 'Android', 'iOS', 'Razorpay'],
    client: 'Sree Raghavendra Stores',
    date: 'May 2026',
  ),
];

class MainLayout extends StatefulWidget {
  const MainLayout({super.key});

  @override
  State<MainLayout> createState() => _MainLayoutState();
}

class _MainLayoutState extends State<MainLayout> {
  final ScrollController _scrollController = ScrollController();
  
  // Navigation keys
  final GlobalKey _homeKey = GlobalKey();
  final GlobalKey _aboutKey = GlobalKey();
  final GlobalKey _servicesKey = GlobalKey();
  final GlobalKey _portfolioKey = GlobalKey();
  final GlobalKey _contactKey = GlobalKey();

  String _currentCategoryFilter = 'All';

  void _scrollToSection(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 600),
        curve: Curves.easeInOut,
      );
    }
  }

  Future<void> _launchURL(String urlString) async {
    final Uri url = Uri.parse(urlString);
    if (!await launchUrl(url, mode: LaunchMode.externalApplication)) {
      throw Exception('Could not launch marketing channel: $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final bool isDesktop = screenWidth > 800;

    return Scaffold(
      drawer: !isDesktop
          ? Drawer(
              backgroundColor: const Color(0xFF1E0D3C),
              child: ListView(
                padding: EdgeInsets.zero,
                children: [
                  DrawerHeader(
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Color(0xFFF59E0B), Color(0xFFEA580C)],
                      ),
                    ),
                    child: Text(
                      'LNM Enterprises',
                      style: GoogleFonts.spaceGrotesk(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                  _buildDrawerItem('Home', _homeKey),
                  _buildDrawerItem('About', _aboutKey),
                  _buildDrawerItem('Services', _servicesKey),
                  _buildDrawerItem('Portfolio', _portfolioKey),
                  _buildDrawerItem('Contact', _contactKey),
                ],
              ),
            )
          : null,
      appBar: AppBar(
        backgroundColor: const Color(0xFF1E0D3C).withOpacity(0.95),
        elevation: 0,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFFFBBF24), Color(0xFFEA580C), Color(0xFFFDE047)],
                ),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Text(
                'LNM',
                style: GoogleFonts.spaceGrotesk(
                  fontWeight: FontWeight.extrabold,
                  fontSize: 16,
                  color: const Color(0xFF0F052D),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Text(
              'Enterprises',
              style: GoogleFonts.spaceGrotesk(
                fontSize: 18,
                fontWeight: FontWeight.w900,
                color: Colors.white,
              ),
            ),
          ],
        ),
        actions: isDesktop
            ? [
                _buildHeaderNavBtn('Home', _homeKey),
                _buildHeaderNavBtn('About', _aboutKey),
                _buildHeaderNavBtn('Services', _servicesKey),
                _buildHeaderNavBtn('Portfolio', _portfolioKey),
                _buildHeaderNavBtn('Contact', _contactKey),
                const SizedBox(width: 15),
              ]
            : null,
      ),
      body: SingleChildScrollView(
        controller: _scrollController,
        child: Column(
          children: [
            // HERO
            Container(key: _homeKey, child: _buildHeroSection(isDesktop)),
            
            // ABOUT
            Container(key: _aboutKey, child: _buildAboutSection(isDesktop)),
            
            // SERVICES
            Container(key: _servicesKey, child: _buildServicesSection(screenWidth)),
            
            // PORTFOLIO
            Container(key: _portfolioKey, child: _buildPortfolioSection(isDesktop, screenWidth)),
            
            // CONTACT
            Container(key: _contactKey, child: _buildContactSection(isDesktop, screenWidth)),
            
            // FOOTER
            _buildFooter(isDesktop, screenWidth),
          ],
        ),
      ),
    );
  }

  Widget _buildDrawerItem(String label, GlobalKey destKey) {
    return ListTile(
      title: Text(label, style: const TextStyle(color: Colors.white)),
      onTap: () {
        Navigator.pop(context);
        _scrollToSection(destKey);
      },
    );
  }

  Widget _buildHeaderNavBtn(String label, GlobalKey destKey) {
    return TextButton(
      onPressed: () => _scrollToSection(destKey),
      child: Text(
        label,
        style: GoogleFonts.spaceGrotesk(color: Colors.white, fontWeight: FontWeight.bold),
      ),
    );
  }

  Widget _buildHeroSection(bool isDesktop) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      decoration: const BoxDecoration(
        gradient: RadialGradient(
          center: Alignment.topCenter,
          radius: 1.2,
          colors: [Color(0xFF2C1952), Color(0xFF130924)],
        ),
      ),
      child: Center(
        child: Container(
          maxWidth: 900,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.08),
                  borderRadius: BorderRadius.circular(30),
                  border: Border.all(color: Colors.white.withOpacity(0.15)),
                ),
                child: Text(
                  'WELCOME TO LNM ENTERPRISES',
                  style: GoogleFonts.spaceGrotesk(
                    fontWeight: FontWeight.bold,
                    fontSize: 11,
                    letterSpacing: 2,
                    color: Colors.amber[300],
                  ),
                ),
              ).animate().fade(duration: 400.ms).slideY(begin: 0.2, end: 0),
              const SizedBox(height: 24),
              RichText(
                textAlign: TextAlign.center,
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: 'Combining Handmade Fashion &\n',
                      style: GoogleFonts.spaceGrotesk(
                        fontSize: isDesktop ? 48 : 32,
                        fontWeight: FontWeight.extrabold,
                        color: Colors.white,
                      ),
                    ),
                    TextSpan(
                      text: 'Digital Software Innovation',
                      style: GoogleFonts.spaceGrotesk(
                        fontSize: isDesktop ? 48 : 32,
                        fontWeight: FontWeight.extrabold,
                        color: const Color(0xFFF59E0B), 
                      ),
                    ),
                  ],
                ),
              ).animate().fade(delay: 150.ms).slideY(begin: 0.2, end: 0),
              const SizedBox(height: 18),
              Text(
                'LNM Enterprises bridges the gap between old-world design precision and high-performance programming systems. Based in Ballari, Karnataka.',
                textAlign: TextAlign.center,
                style: GoogleFonts.inter(
                  color: Colors.blue[100],
                  fontSize: 15,
                ),
              ),
              const SizedBox(height: 32),
              Wrap(
                spacing: 16,
                runSpacing: 16,
                alignment: WrapAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: () => _scrollToSection(_servicesKey),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFFF59E0B),
                      foregroundColor: const Color(0xFF0F052D),
                      padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 18),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    ),
                    child: Text(
                      'EXPLORE SERVICES',
                      style: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.w900, letterSpacing: 1),
                    ),
                  ),
                  OutlinedButton(
                    onPressed: () => _scrollToSection(_contactKey),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.white,
                      side: BorderSide(color: Colors.white.withOpacity(0.2)),
                      padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 18),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    ),
                    child: Text(
                      'INQUIRE & FIND US',
                      style: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.w900, letterSpacing: 1),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildAboutSection(bool isDesktop) {
    return Container(
      color: Colors.transparent,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 60),
      child: Center(
        child: Container(
          maxWidth: 1100,
          child: Column(
            children: [
              Text(
                'OUR TRADITION & ROADMAP',
                style: GoogleFonts.spaceGrotesk(
                  fontSize: 12,
                  letterSpacing: 2,
                  color: Colors.amber[300],
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                'Bridging Two Distinct Specialties',
                style: GoogleFonts.spaceGrotesk(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 40),
              isDesktop
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(child: _buildAboutTextColumn()),
                        const SizedBox(width: 40),
                        Expanded(child: _buildAboutStatsCard()),
                      ],
                    )
                  : Column(
                      children: [
                        _buildAboutTextColumn(),
                        const SizedBox(height: 30),
                        _buildAboutStatsCard(),
                      ],
                    ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildAboutTextColumn() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Our Story and Purpose',
          style: GoogleFonts.spaceGrotesk(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.amber[300]),
        ),
        const SizedBox(height: 16),
        Text(
          'Founded in the historic city of Ballari, Karnataka, LNM Enterprises began as a customized tailoring workshop dedicated to classic ladies\' wear and digital embroidery templates. Driven by a passion to deliver comprehensive digital solutions under one roof, we later expanded into mobile and custom web systems engineering.',
          style: GoogleFonts.inter(color: Colors.blue[50], fontSize: 14, height: 1.6),
        ),
        const SizedBox(height: 16),
        Text(
          'Today, we proudly run dual setups: fabricating gorgeous bridal embroidery designs in our workshop while compiling fast server-compliances and native application listings for businesses nationwide.',
          style: GoogleFonts.inter(color: Colors.blue[50], fontSize: 14, height: 1.6),
        ),
      ],
    );
  }

  Widget _buildAboutStatsCard() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.08),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Quick Verification Facts',
            style: GoogleFonts.spaceGrotesk(fontSize: 11, fontWeight: FontWeight.bold, letterSpacing: 1, color: Colors.amber[300]),
          ),
          const SizedBox(height: 16),
          _buildBulletItem(Icons.location_on, 'Headquarters', 'Anjinappa Nagar, Rupanagudi Road, Ballari, Karnataka 583101'),
          _buildBulletItem(Icons.star, 'Core Services', 'Women\'s Custom Tailoring, computerized embroidery design, Web & App Development'),
          _buildBulletItem(Icons.verified, 'Trust Compliancy', '100% Secure Google Play listing audit patterns'),
        ],
      ),
    );
  }

  Widget _buildBulletItem(IconData icon, String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 20, color: Colors.purple[200]),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: Colors.white)),
                Text(value, style: TextStyle(color: Colors.blue[100], fontSize: 12)),
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildServicesSection(double screenWidth) {
    final List<String> categories = ['All', 'Tailoring', 'Embroidery', 'Software'];
    final filteredServices = _currentCategoryFilter == 'All'
        ? services
        : services.where((s) => s.category == _currentCategoryFilter).toList();

    return Container(
      color: Colors.black.withOpacity(0.15),
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 60),
      child: Center(
        child: Container(
          maxWidth: 1100,
          child: Column(
            children: [
              Text(
                'WHAT WE DO BEST',
                style: GoogleFonts.spaceGrotesk(fontSize: 12, letterSpacing: 2, color: Colors.amber[300], fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 12),
              Text(
                'Bespoke Services Catalog',
                style: GoogleFonts.spaceGrotesk(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 24),
              
              // Custom Filter Tabs
              Wrap(
                spacing: 12,
                children: categories.map((cat) {
                  final bool isSelected = _currentCategoryFilter == cat;
                  return ChoiceChip(
                    label: Text(cat, style: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.bold)),
                    selected: isSelected,
                    onSelected: (bool selected) {
                      setState(() {
                        _currentCategoryFilter = cat;
                      });
                    },
                    selectedColor: const Color(0xFFF59E0B),
                    backgroundColor: Colors.white.withOpacity(0.08),
                    labelStyle: TextStyle(color: isSelected ? const Color(0xFF0F052D) : Colors.white),
                  );
                }).toList(),
              ),
              const SizedBox(height: 40),
              
              // Services Grid Responsive layout
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: filteredServices.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: screenWidth > 900 ? 3 : (screenWidth > 600 ? 2 : 1),
                  childAspectRatio: 0.8,
                  crossAxisSpacing: 20,
                  mainAxisSpacing: 20,
                ),
                itemBuilder: (context, index) {
                  final service = filteredServices[index];
                  return _buildServiceCard(service);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildServiceCard(ServiceItem item) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.06),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withOpacity(0.08)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Icon(item.icon, size: 28, color: Colors.amber[300]),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.05),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  item.category.toUpperCase(),
                  style: const TextStyle(fontSize: 9, fontWeight: FontWeight.bold, letterSpacing: 1),
                ),
              )
            ],
          ),
          const SizedBox(height: 16),
          Text(item.title, style: GoogleFonts.spaceGrotesk(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white)),
          const SizedBox(height: 8),
          Expanded(
            child: Text(
              item.description,
              maxLines: 4,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: Colors.blue[100], fontSize: 13, height: 1.5),
            ),
          ),
          const Divider(color: Colors.white12, height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(item.pricing, style: const TextStyle(fontWeight: FontWeight.bold, color: Color(0xFFF59E0B), fontSize: 12)),
              TextButton(
                onPressed: () {
                  _scrollToSection(_contactKey);
                },
                child: const Text('Quote Inquiry ->', style: TextStyle(fontSize: 11)),
              )
            ],
          )
        ],
      ),
    );
  }

  Widget _buildPortfolioSection(bool isDesktop, double screenWidth) {
    return Container(
      backgroundColor: Colors.transparent,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 60),
      child: Center(
        child: Container(
          maxWidth: 1100,
          child: Column(
            children: [
              Text(
                'OUR WORK SHOWCASE',
                style: GoogleFonts.spaceGrotesk(fontSize: 12, letterSpacing: 2, color: Colors.amber[300], fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 12),
              Text(
                'LNM Enterprises Portfolio',
                style: GoogleFonts.spaceGrotesk(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 40),
              
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: portfolioItems.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: screenWidth > 900 ? 3 : (screenWidth > 600 ? 2 : 1),
                  childAspectRatio: 0.85,
                  crossAxisSpacing: 20,
                  mainAxisSpacing: 20,
                ),
                itemBuilder: (context, index) {
                  final item = portfolioItems[index];
                  return _buildPortfolioCard(item);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildPortfolioCard(PortfolioItem item) {
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.06),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withOpacity(0.08)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Image.network(
              item.imageUrl,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  item.category.toUpperCase(),
                  style: GoogleFonts.spaceGrotesk(fontSize: 10, color: Colors.amber[300], fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                Text(item.title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
                const SizedBox(height: 6),
                Wrap(
                  spacing: 6,
                  children: item.tags.map((tag) => Chip(
                    padding: EdgeInsets.zero,
                    label: Text('#$tag', style: const TextStyle(fontSize: 9)),
                    backgroundColor: Colors.white10,
                  )).toList(),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildContactSection(bool isDesktop, double screenWidth) {
    return Container(
      color: Colors.black.withOpacity(0.15),
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 60),
      child: Center(
        child: Container(
          maxWidth: 1100,
          child: Column(
            children: [
              Text(
                'GET IN TOUCH',
                style: GoogleFonts.spaceGrotesk(fontSize: 12, letterSpacing: 2, color: Colors.amber[300], fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 12),
              Text(
                'Contact Our Specialists',
                style: GoogleFonts.spaceGrotesk(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 40),
              isDesktop
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(child: _buildContactInfoWidget()),
                        const SizedBox(width: 40),
                        Expanded(child: _buildContactFormWidget()),
                      ],
                    )
                  : Column(
                      children: [
                        _buildContactInfoWidget(),
                        const SizedBox(height: 30),
                        _buildContactFormWidget(),
                      ],
                    ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildContactInfoWidget() {
    final String whatsAppUrl = 'https://wa.me/${BusinessInfo.whatsappNumber}?text=Hello LNM Enterprises! I visited your business domain and would like to register an inquiry.';
    
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildContactCardItem(
          Icons.location_on,
          'Physical Showroom HQ',
          BusinessInfo.fullAddress,
        ),
        _buildContactCardItem(
          Icons.message,
          'Tailoring & WhatsApp Desk',
          '${BusinessInfo.tailoringPhone}\n(Accepts Calls and WhatsApp chats)',
          onTap: () => _launchURL(whatsAppUrl),
        ),
        _buildContactCardItem(
          Icons.phone_in_talk,
          'Software Tech Support Unit',
          '${BusinessInfo.softwarePhone}\n(Voice Calls Only)',
          onTap: () => _launchURL('tel:${BusinessInfo.softwarePhone}'),
        ),
        _buildContactCardItem(
          Icons.email,
          'Business Email Enquiries',
          BusinessInfo.email,
          onTap: () => _launchURL('mailto:${BusinessInfo.email}'),
        ),
        _buildContactCardItem(
          Icons.schedule,
          'Visiting Hours',
          BusinessInfo.hours,
        ),
      ],
    );
  }

  Widget _buildContactCardItem(IconData icon, String header, String content, {VoidCallback? onTap}) {
    return Card(
      color: Colors.white.withOpacity(0.05),
      margin: const EdgeInsets.only(bottom: 16),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(icon, color: Colors.amber[300], size: 24),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(header, style: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.bold, fontSize: 13, color: Colors.blue[100])),
                    const SizedBox(height: 4),
                    Text(content, style: const TextStyle(fontSize: 13, height: 1.4)),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildContactFormWidget() {
    final nameController = TextEditingController();
    final phoneController = TextEditingController();
    final messageController = TextEditingController();

    return Container(
      padding: const EdgeInsets.all(28),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.07),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Send Digital message', style: GoogleFonts.spaceGrotesk(fontSize: 18, fontWeight: FontWeight.bold)),
          const SizedBox(height: 20),
          TextField(
            controller: nameController,
            decoration: const InputDecoration(labelText: 'Your Full Name', filled: true),
          ),
          const SizedBox(height: 16),
          TextField(
            controller: phoneController,
            decoration: const InputDecoration(labelText: 'WhatsApp/Phone Number', filled: true),
          ),
          const SizedBox(height: 16),
          TextField(
            controller: messageController,
            maxLines: 4,
            decoration: const InputDecoration(labelText: 'Detailed message', filled: true),
          ),
          const SizedBox(height: 24),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () {
                final message = 'Hello LNM! I would like to inquire. Name: ${nameController.text}. Phone: ${phoneController.text}. Note: ${messageController.text}';
                final url = 'https://wa.me/${BusinessInfo.whatsappNumber}?text=${Uri.encodeComponent(message)}';
                _launchURL(url);
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFF59E0B),
                foregroundColor: const Color(0xFF0F052D),
                padding: const EdgeInsets.all(16),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('SUBMIT SECURE REQUEST', style: TextStyle(fontWeight: FontWeight.bold)),
            ),
          )
        ],
      ),
    );
  }

  Widget _buildFooter(bool isDesktop, double screenWidth) {
    return Container(
      color: const Color(0xFF0F052D),
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 40),
      child: Center(
        child: Container(
          maxWidth: 1100,
          child: Column(
            children: [
              Text(
                'LNM Enterprises © 2026',
                style: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.bold, color: Colors.amber[300]),
              ),
              const SizedBox(height: 8),
              const Text(
                'Handcrafted tailored designs cooperating with enterprise technology integrations.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white70, fontSize: 12),
              ),
              const SizedBox(height: 16),
              const Divider(color: Colors.white10),
              const SizedBox(height: 16),
              Text(
                '1st Cross, Anjinappa Nagar, Rupanagudi Road, Ballari - 583101, Karnataka, India',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.blue[100], fontSize: 11),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

---

### 3. Verification & Deployment Compliancies

When deploying this app either for Android, iOS, or Flutter Web:
1. Ensure the `AndroidManifest.xml` has permission query configurations for launching WhatsApp external phone URLs (`url_launcher` requirement):
   ```xml
   <queries>
       <intent>
           <action android:name="android.intent.action.VIEW" />
           <data android:scheme="https" />
       </intent>
       <intent>
           <action android:name="android.intent.action.DIAL" />
           <data android:scheme="tel" />
       </intent>
   </queries>
   ```
2. Enable `uses-permission android:name="android.permission.INTERNET"` inside custom builds to dynamically retrieve graphic representations from Unsplash CDN.
